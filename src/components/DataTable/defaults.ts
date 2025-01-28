import { formatNumber, inflect } from '@abw/badger-utils'
import { pagerNextPageLabel, pagerPreviousPageLabel } from '../Pager'
import { DATATABLE_CLASS, DATATABLE_CONTROLS_CLASS, DATATABLE_FILTER_CLASS, DATATABLE_FILTER_ICON, DATATABLE_FILTER_ICON_CLASS, DATATABLE_FILTER_TRIGGER_CLASS, DATATABLE_FILTERING_CLASS, DATATABLE_HAS_FILTERS_CLASS, DATATABLE_HEADER_CLASS, DATATABLE_NO_ROWS, DATATABLE_ONE_ROW, DATATABLE_SELECTABLE_CLASS, DATATABLE_SUMMARY_CLASS } from './constants'
import { CLEAR_ICON, SCROLL_X } from '@/src/constants'

// Default options that are only for use in DataTable context
export const dataTableModelDefaults = {
  storageItem: 'state',
  debugPrefix: 'DataTable > ',
  pageNo: 1,
  pageSize: 10,
  datatableClass: DATATABLE_CLASS,
}

// Options that can be passed to the model and are forwarded to consumers
export const dataTableRenderDefaults = {
  prevIcon: 'arrow-left',
  prevLabel: pagerPreviousPageLabel,
  nextIcon: 'arrow-right',
  nextLabel: pagerNextPageLabel,
  navSize: 'smaller',
  headerClass: DATATABLE_HEADER_CLASS,
  summaryClass: DATATABLE_SUMMARY_CLASS,
  controlsClass: DATATABLE_CONTROLS_CLASS,
  noRows: DATATABLE_NO_ROWS,
  oneRow: DATATABLE_ONE_ROW,
  allRows: (total: number) =>
    `all ${formatNumber(total)} rows`,
  someRows: (from: number, to: number, total: number) =>
    `rows ${formatNumber(from)}-${formatNumber(to)} of ${formatNumber(total)}`,
  filtersClass: 'filters',
  filterClass: DATATABLE_FILTER_CLASS,
  filterIcon: DATATABLE_FILTER_ICON,
  filteringIcon: DATATABLE_FILTER_ICON,
  filterIconClass: DATATABLE_FILTER_ICON_CLASS,
  filteringClass: DATATABLE_FILTERING_CLASS,
  hasFiltersClass: DATATABLE_HAS_FILTERS_CLASS,
  filterTriggerClass: DATATABLE_FILTER_TRIGGER_CLASS,
  clearFilterIcon: CLEAR_ICON,
  filterText : (n?: number) => n ? inflect(n, 'Filter') : 'Filter',
  pageSizes: [10, 25, 50, 100, 250, 500, 1000],
  pageSizeText: (n: number) => `${n} per page`,
  columnsText: 'Columns',
  columnsHelpClick: 'Click checkbox to show/hide.',
  columnsHelpDrag: 'Drag handle to order.',
  tableClass: 'celled striped',
  selectableClass: DATATABLE_SELECTABLE_CLASS,
  scrollXClass: SCROLL_X,
  headingsClass: 'headings',
  headingClass: 'heading',
  sortUpIcon: 'arrow-up',
  sortDownIcon: 'arrow-down',
  unsortedIcon: 'arrows',
  sortIconClass: `sort-icon`,
  sortingClass: 'sorting',
  noRowsClass: 'no-rows',
  noRowsText: 'No rows selected',
  footerClass: 'datatable-footer',
  pagerSize: 'small',
}

// Combined set of above
export const dataTableDefaults = {
  ...dataTableModelDefaults,
  ...dataTableRenderDefaults
}