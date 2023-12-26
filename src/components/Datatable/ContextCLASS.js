import { doNothing } from '@abw/badger-utils'
import { Context, Generator } from '@abw/react-context'

class DatatableContext extends Context {
  static debug        = true
  static debugPrefix  = 'Datatable > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    onLoad:   doNothing,
    onUnload: doNothing,
  }
  static initialState = {
    sortColumn:   null,
    sortReverse:  false,
    showFilters:  false,
    pageNo:       1,
    pageSize:     10,
    filters:      [ ]
  }
  static initialProps = {
    pageNo:   'pageNo',
    pageSize: 'pageSize',
  }

  static actions = [
    'setPageNo', 'setPageSize',
    'setVisibleColumn', 'setColumnOrder',
    'toggleSortColumn', 'setSortReverse',
    'setFilter', 'toggleFilters'
  ]

  componentDidMount() {
    this.mounted = true
    this.props.onLoad(this)
  }

  componentWillUnmount() {
    this.mounted = false
    this.props.onUnload(this)
  }

  setPageNo(pageNo) {
    this.set({ pageNo })
  }

  setPageSize(pageSize) {
    this.set({ pageSize, pageNo: 1 })
  }

  setSortReverse(sortReverse) {
    this.set({ sortReverse })
  }

}

const generated = Generator(DatatableContext)
export const useDatatable = generated.Use
export default generated