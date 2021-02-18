// since we just don't want to see duplicate import names, we need to leverage alias to prevent it from happening
// assuming that nobody uses "__" for their import name prefix, 
// and with the custom scalar name key as an insurance, we can pretty much ensure 99.9% of the case this is unique
export function generateImportAliasFromScalar(scalarName: string, importName: string) {
    return `__${scalarName}__${importName}`
}