import crypto from "crypto";
import fs from "fs";
import path from "path";
import os from "os";
import type { DMMF as PrismaDMMF } from "@prisma/generator-helper";
import { DmmfDocument } from "./dmmf/dmmf-document";
import { DMMF } from "./dmmf/types";

interface CacheEntry {
  hash: string;
  timestamp: number;
}

interface GeneratorCache {
  version: string;
  datamodel: { [modelName: string]: CacheEntry };
  enums: { [enumName: string]: CacheEntry };
  inputs: { [typeName: string]: CacheEntry };
  outputs: { [typeName: string]: CacheEntry };
  resolvers: { [resolverName: string]: CacheEntry };
}

export class CacheManager {
  private cacheFilePath: string;
  private cache: GeneratorCache;

  constructor(basePath: string) {
    const projectHash = crypto.createHash("md5").update(basePath).digest("hex");
    this.cacheFilePath = path.join(
      os.tmpdir(),
      `.typegraphql-prisma-cache-${projectHash}.json`,
    );
    this.cache = this.loadCache();
  }

  private loadCache(): GeneratorCache {
    try {
      if (fs.existsSync(this.cacheFilePath)) {
        return JSON.parse(fs.readFileSync(this.cacheFilePath, "utf-8"));
      }
    } catch (error) {
      // If cache is corrupted or invalid, return fresh cache
    }
    return {
      version: "1.0.0",
      datamodel: {},
      enums: {},
      inputs: {},
      outputs: {},
      resolvers: {},
    };
  }

  private saveCache(): void {
    fs.writeFileSync(this.cacheFilePath, JSON.stringify(this.cache, null, 2));
  }

  private hashDMMFSection(data: any): string {
    return crypto
      .createHash("sha256")
      .update(JSON.stringify(data))
      .digest("hex");
  }

  public shouldRegenerateModel(model: DMMF.Model): boolean {
    const hash = this.hashDMMFSection(model);
    const cached = this.cache.datamodel[model.name];
    return !cached || cached.hash !== hash;
  }

  public shouldRegenerateEnum(enumDef: DMMF.Enum): boolean {
    const hash = this.hashDMMFSection(enumDef);
    const cached = this.cache.enums[enumDef.name];
    return !cached || cached.hash !== hash;
  }

  public shouldRegenerateInput(type: DMMF.InputType): boolean {
    const hash = this.hashDMMFSection(type);
    const cached = this.cache.inputs[type.typeName];
    return !cached || cached.hash !== hash;
  }

  public shouldRegenerateOutput(type: DMMF.OutputType): boolean {
    const hash = this.hashDMMFSection(type);
    const cached = this.cache.outputs[type.typeName];
    return !cached || cached.hash !== hash;
  }

  public shouldRegenerateResolver(mapping: DMMF.ModelMapping): boolean {
    const hash = this.hashDMMFSection(mapping);
    const cached = this.cache.resolvers[mapping.modelName];
    return !cached || cached.hash !== hash;
  }

  public updateModelCache(model: DMMF.Model): void {
    this.cache.datamodel[model.name] = {
      hash: this.hashDMMFSection(model),
      timestamp: Date.now(),
    };
    this.saveCache();
  }

  public updateEnumCache(enumDef: DMMF.Enum): void {
    this.cache.enums[enumDef.name] = {
      hash: this.hashDMMFSection(enumDef),
      timestamp: Date.now(),
    };
    this.saveCache();
  }

  public updateInputCache(type: DMMF.InputType): void {
    this.cache.inputs[type.typeName] = {
      hash: this.hashDMMFSection(type),
      timestamp: Date.now(),
    };
    this.saveCache();
  }

  public updateOutputCache(type: DMMF.OutputType): void {
    this.cache.outputs[type.typeName] = {
      hash: this.hashDMMFSection(type),
      timestamp: Date.now(),
    };
    this.saveCache();
  }

  public updateResolverCache(mapping: DMMF.ModelMapping): void {
    this.cache.resolvers[mapping.modelName] = {
      hash: this.hashDMMFSection(mapping),
      timestamp: Date.now(),
    };
    this.saveCache();
  }
}
