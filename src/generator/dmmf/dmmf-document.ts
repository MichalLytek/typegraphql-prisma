import type { DMMF as PrismaDMMF } from "@prisma/generator-helper";
import { DMMF } from "./types";
import {
  transformSchema,
  transformMappings,
  transformBareModel,
  transformModelWithFields,
  transformEnums,
  generateRelationModel,
} from "./transform";
import { GeneratorOptions } from "../options";
import { EmitBlockKind } from "../emit-block";

export class DmmfDocument implements DMMF.Document {
  private models: DMMF.Model[];
  datamodel: DMMF.Datamodel;
  schema: DMMF.Schema;
  enums: DMMF.Enum[];
  modelMappings: DMMF.ModelMapping[];
  relationModels: DMMF.RelationModel[];

  constructor(
    { datamodel, schema, mappings }: PrismaDMMF.Document,
    public options: GeneratorOptions,
  ) {
    const enumTypes = [
      ...(schema.enumTypes.prisma ?? []),
      ...(schema.enumTypes.model ?? []),
    ];
    const models = [...datamodel.models, ...datamodel.types];

    // transform bare model without fields
    this.models = models.map(transformBareModel);
    // transform enums before model fields to map enum types to enum values string union
    this.enums = enumTypes.map(transformEnums(this));
    // then transform once again to map the fields (it requires mapped model type names)
    this.models = models.map(transformModelWithFields(this));
    // transform enums again to map renamed fields
    this.enums = enumTypes.map(transformEnums(this));

    this.datamodel = {
      models: this.models,
      enums: datamodel.enums.map(transformEnums(this)),
      types: [], // TODO: parse `datamodel.types`
    };
    this.schema = {
      ...transformSchema(schema, this),
      enums: this.enums,
    };
    this.modelMappings = transformMappings(
      mappings.modelOperations,
      this,
      options,
    );
    this.relationModels = this.models
      .filter(model =>
        model.fields.some(
          field => field.relationName !== undefined && !field.isOmitted.output,
        ),
      )
      .filter(model => {
        const outputType = this.schema.outputTypes.find(
          type => type.name === model.name,
        );
        return (
          outputType &&
          outputType.fields.some(outputTypeField =>
            model.fields.some(
              modelField =>
                modelField.name === outputTypeField.name &&
                modelField.relationName !== undefined &&
                !modelField.isOmitted.output,
            ),
          )
        );
      })
      .map(generateRelationModel(this));
  }

  getModelTypeName(modelName: string): string | undefined {
    return this.models.find(
      it => it.name.toLocaleLowerCase() === modelName.toLocaleLowerCase(),
    )?.typeName;
  }

  isModelName(typeName: string): boolean {
    return this.models.some(it => it.name === typeName);
  }

  isModelTypeName(typeName: string): boolean {
    return this.models.some(it => it.typeName === typeName);
  }

  getModelFieldAlias(modelName: string, fieldName: string): string | undefined {
    const model = this.models.find(it => it.name === modelName);
    return model?.fields.find(it => it.name === fieldName)?.typeFieldAlias;
  }

  shouldGenerateBlock(block: EmitBlockKind): boolean {
    return this.options.blocksToEmit.includes(block);
  }
}
