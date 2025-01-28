import Context from './Context'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu'

export const DataTablePageSize = Context.Consumer(
  ({
    setPageSize,
    pageSizes,
    pageSizeText,
  }) =>
    <div className="pagesize">
      <DropdownMenu
        right
        iconRight="page"
        text='Page Size'
        size="small"
        triggerClass="trigger pad-v-none"
        options={
          pageSizes.map(
            n => ({ n, text: pageSizeText(n) })
          )
        }
        onSelect={ (item: { n: number }) => setPageSize(item.n)}
      />
    </div>
)

export default DataTablePageSize