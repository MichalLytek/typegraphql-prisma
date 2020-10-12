import * as semVer from "semver";

export function getInstalledPrismaVersion(): string {
  const prismaPackageJson = require("@prisma/cli/package.json");
  return prismaPackageJson.version;
}

export function getPeerDependencyPrismaRequirement(): string {
  const ownPackageJson = require("../../package.json");
  return ownPackageJson.peerDependencies["@prisma/cli"];
}

export function ensureInstalledCorrectPrismaPackage() {
  const installedVersion = getInstalledPrismaVersion();
  const versionRequirement = getPeerDependencyPrismaRequirement();

  if (!semVer.satisfies(installedVersion, versionRequirement)) {
    throw new Error(
      `Looks like you use an incorrect version of the Prisma packages: "${installedVersion}". ` +
        `Please ensure that you have installed a version ` +
        `that meets 'typegraphql-prisma' requirement: "${versionRequirement}".`,
    );
  }
}
