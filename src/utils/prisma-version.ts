import * as semVer from "semver";

function shouldSkipPrismaVersionCheck() {
  const value = process.env.SKIP_PRISMA_VERSION_CHECK;
  return value === "true" || value === "TRUE" || value === "1";
}

function getInstalledPrismaVersion(): string {
  const prismaPackageJson = require("@prisma/cli/package.json");
  return prismaPackageJson.version;
}

function getPeerDependencyPrismaRequirement(): string {
  const ownPackageJson = require("../../package.json");
  return ownPackageJson.peerDependencies["@prisma/cli"];
}

export function ensureInstalledCorrectPrismaPackage() {
  if (shouldSkipPrismaVersionCheck()) {
    return;
  }

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
