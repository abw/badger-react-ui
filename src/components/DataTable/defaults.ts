// Default options that are only for use in DataTable context
export const dataTableModelDefaults = {
  storageItem: 'state',
  debugPrefix: 'DataTable > ',
  pageNo: 1,
  pageSize: 10
}

// Default options that are also forwarded to DataTable consumers
export const dataTableRenderDefaults = {
  wibbleClass: 'wibble'
}

// Combined set of above
export const dataTableDefaults = {
  ...dataTableModelDefaults,
  ...dataTableRenderDefaults
}