// quick hack until I do this properly
declare module '@abw/badger-react-ui' {
  // Alert
  export function Alert()
  export function Info()
  export function Success()
  export function Warning()
  export function Error()
  // Badge
  export function Badge()
  // Button
  export function Button()
  // Buttons
  export function Buttons()
  // Checkbox
  export function Checkbox()
  export function CheckboxState()
  // Confirm
  export function Confirm()
  // DataTable
  export function DataTable()
  export function DataTableBody()
  export function DataTableCell()
  export function DataTableContent()
  export function DataTableContext()
  export function DataTableControls()
  export function DataTableFilter()
  export function DataTableFiltering()
  export function DataTableFilters()
  export function DataTableFooter()
  export function DataTableHeader()
  export function DataTableHeading()
  export function DataTableHeadings()
  export function DataTablePageSize()
  export function DataTableRow()
  export function DataTableRows()
  export function DataTableNoRows()
  export function DataTableSummary()
  export function DataTableTable()
  export function dataTableColumnString(column: any)
  export function dataTableColumnDefinition(column: any)
  export function dataTableColumnDefinitions(columns: any)
  export function dataTableVisibleColumns(columns: any, saved: any)
  export function dataTableColumnOrder(columns: any, saved: any)
  export function dataTableSortColumn(columns: any, savedColumn: any, savedReverse: any)
  export function dataTableFilter(rows: any, columns: any, filters: any)
  export function dataTableSort(rows: any, columns: any, sortColumn: any, sortReverse: any): any;
  export function DataTableConsumer()
  export function useDataTable()
  export function filterStringContains()
  export function filterStringExact()
  export function filterBoolean()
  export function filterInteger()
  export function filterFloat()
  export function dataTablePaginate(rows: any, pageNo?: number, pageSize?: any): {
    pageSize: any;
    pages: number;
    page: number;
    pageNo: number;
    total: any;
    firstIndex: number;
    lastIndex: number;
    firstPage: number;
    lastPage: number;
    thisSize: any;
    from: number;
    to: number;
    all: boolean;
    one: boolean;
    none: boolean;
    rows: any;
  };

  // Details
  export function Details()
  export function DetailsContainer()
  export function DetailsSummary()
  export function DetailsContent()
  export function DetailsContext()
  export function useDetails()
  // Dropdown
  export function Dropdown()
  export function DropdownContent()
  export function DropdownContext()
  export function DropdownBody()
  export function DropdownTrigger()
  export function useDropdown()
  //DropdownMenu
  export function DropdownMenu()
  export function DropdownMenuContent()
  export function DropdownMenuContext()
  export function DropdownMenuOption()
  export function DropdownMenuOptions()
  export function DropdownMenuSeparator()
  export function DropdownMenuTrigger()
  export function useDropdownMenu()
  // Form
  export function Form()
  export function Field()
  export function Fields()
  export function Fieldset()
  export function Cancel()
  export function Reset()
  export function Submit()
  export function CancelSubmit()
  export function ResetSubmit()
  export function Debug()
  export function Layout()
  export function Label()
  export function Input()
  export function Message()
  export function Errors()
  export function Status()
  export function Submitting()
  export function UseField()
  export function UseForm()
  export function useField()
  export function useForm()
  export function inputClasses()
  export function statusClasses()
  export function fieldClass()
  export function addInputType()
  // Icon
  export function Icon()
  export function WithIcons()
  export function Icons()
  export function iconLibrary()
  export function addIcon()
  export function addIcons()
  // Modal
  export function Modal()
  export function ModalClose()
  export function ModalContent()
  export function ModalFooter()
  export function ModalHeader()
  export function ModalState()
  // Overlay
  export function Overlay()
  export function OverlayState()
  // Pager
  export function Pager()
  export function PagerContent()
  export function PagerNext()
  export function PagerPage()
  export function PagerPages()
  export function PagerPrevious()
  export function PagerSeparator()
  export function PagerContext()
  export function usePager()
  // Radio
  export function Radio()
  export function Radio()
  export function RadioInput()
  export function RadioLabel()
  export function RadioOption()
  // Search
  export function Search()
  export function SearchContent()
  export function SearchInput()
  export function SearchNoResults()
  export function SearchResult()
  export function SearchResults()
  export function SearchContext()
  export function useSearch()
  // Select
  export function Select()
  export function SelectContent()
  export function SelectHeading()
  export function SelectInput()
  export function SelectItem()
  export function SelectMenu()
  export function SelectNoOptions()
  export function SelectOption()
  export function SelectSearch()
  export function SelectSeparator()
  export function SelectProvider()
  export function SelectConsumer()
  export function useSelect()
  // Sortable
  export function Sortable()
  export function HorizontalSort()
  export function VerticalSort()
  export function MakeSortable()
  export function SortableItem()
  // Spinner
  export function Spinner()
  // Table
  export function Table()
  export function TableRows()
  export function TableColumns()
  export function TableHead()
  export function TableBody()
  export function TableFoot()
  export function TableRow()
  export function TableCell()
  export function rowProps()
  export function cellProps()
  // Tabset
  export function Tabset()
  // Tiles
  export function Tiles()
  // Toggle
  export function Toggle()
  export function ToggleState()
  export function useToggle()
  // elements
  export function Div()
  export function Flex()
  // utils
  export function Storage()
  export function classes()
  export function colorClass()
  export function sizeColorProps()
  export function styleProps()
  export function stylePropsClasses()
  export function borderClass()
  export function shadowClass()
  export function paddingClass()
  export function marginClass()
  export function radiusClass()
  export function foregroundClass()
  export function backgroundClass()
  export function foregroundDarkClass()
  export function backgroundDarkClass()
  export function gridClass()
  export function gapClass()
  export function lookupVariant()
  export function themedProps()
}