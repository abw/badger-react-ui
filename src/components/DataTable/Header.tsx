import Context           from './Context'
import DataTableSummary  from './Summary'
import DataTableControls from './Controls'
import Button            from '@/components/Button/Button'
import { maybeFunction } from '@abw/badger-utils'
import { pagerPreviousPageLabel, pagerNextPageLabel } from '@/src/index'

export const DataTableHeader = Context.Consumer(
  ({
    page,
    setPageNo,
    prevIcon='arrow-left',
    prevLabel=pagerPreviousPageLabel,
    nextIcon='arrow-right',
    nextLabel=pagerNextPageLabel,
    navSize='smaller',
    headerClass='small flex space bottom gap-2',
    Summary=DataTableSummary,
    Controls=DataTableControls,
  }) =>
    <header className={headerClass}>
      <Button
        icon={prevIcon}
        size={navSize}
        disabled={page.pageNo <= page.firstPage}
        outline
        onClick={() => setPageNo(page.pageNo - 1)}
        role="navigation"
        label={maybeFunction(prevLabel(page.pageNo - 1))}
      />
      <div>
        <Summary/>
        <Controls/>
      </div>
      <Button
        icon={nextIcon}
        size={navSize}
        disabled={page.pageNo >= page.lastPage}
        outline
        onClick={() => setPageNo(page.pageNo + 1)}
        role="navigation"
        label={maybeFunction(nextLabel(page.pageNo + 1))}
      />
    </header>
)

export default DataTableHeader