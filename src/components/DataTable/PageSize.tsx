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
            n => ({ value: n, text: pageSizeText(n) })
          )
        }
        // @ts-expect-error - it's an object, I know what it is.
        onSelect={ item  => setPageSize(item.value) }
      />
    </div>
)

export default DataTablePageSize