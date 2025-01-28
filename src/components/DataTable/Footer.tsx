import Context  from './Context'
import Pager    from '@/components/Pager/Pager'

export const DataTableFooter = Context.Consumer(
  ({
    footerClass,
    pager={},
    page,
    setPageNo,
    pagerSize
  }) =>
    <footer className={footerClass}>
      { page.total > 0 &&
        <Pager
          size={pagerSize}
          {...pager}
          page={page.page}
          pages={page.pages}
          setPage={n => setPageNo(n + 1)}
        />
      }
    </footer>
)

export default DataTableFooter