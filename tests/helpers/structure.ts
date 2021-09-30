import directoryTree, { DirectoryTree } from "directory-tree";

const getDirNodeNameString = (node: DirectoryTree) =>
  node.type === "file" ? node.name : `[${node.name}]`;

function stringifyDirectoryTrees(
  directoryStructure: DirectoryTree[] | undefined,
  indent = 0,
): string {
  if (!directoryStructure) {
    return "";
  }
  return directoryStructure
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    .reduce(
      (directoryStructureString, child) =>
        directoryStructureString +
        " ".repeat(indent) +
        getDirNodeNameString(child) +
        "\n" +
        stringifyDirectoryTrees(child.children, indent + 2),
      "",
    );
}

export function getDirectoryStructureString(dirPath: string) {
  const directoryStructure = directoryTree(dirPath, {
    attributes: ["size", "type", "extension"] as any,
  });
  const directoryStructureString =
    "\n[type-graphql]\n" +
    stringifyDirectoryTrees(directoryStructure.children, 2);
  return directoryStructureString;
}
