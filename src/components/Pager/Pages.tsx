import Context        from './Context'
import PagerPage      from './Page'
import PagerSeparator from './Separator'
import { hasValue }   from '@abw/badger-utils'

export const PagerPages = Context.Consumer(
  ({
    page, pageNo,
    firstPage, firstPageNo,
    prevPage, prevPageNo,
    nextPage, nextPageNo,
    lastPage, lastPageNo,
    setPage,
    pagesClass='pages',
    buttonClass,
    pageClass=buttonClass,
    currentPageClass='brand',
    showFirstLast=true,
    Separator=PagerSeparator,
    Page=PagerPage
  }) =>
    <div className={pagesClass}>
      { Boolean(showFirstLast && prevPage && prevPage > firstPage) &&
        <>
          <Page
            page={firstPage}
            pageNo={firstPageNo}
            className={pageClass}
            onClick={() => setPage(firstPage)}
          />
          { prevPage && prevPage > firstPage + 1 &&
            <Separator/>
          }
        </>
      }
      { hasValue(prevPage) &&
        <Page
          page={prevPage}
          pageNo={prevPageNo}
          className={pageClass}
          onClick={() => setPage(prevPage)}
        />
      }
      <Page
        page={page}
        pageNo={pageNo}
        className={currentPageClass}
        current disabled
      />
      { hasValue(nextPage) &&
        <Page
          page={nextPage}
          pageNo={nextPageNo}
          className={pageClass}
          onClick={() => setPage(nextPage)}
        />
      }
      { showFirstLast && nextPage && nextPage < lastPage &&
        <>
          { nextPage < lastPage - 1 &&
            <Separator/>
          }
          <Page
            page={lastPage}
            pageNo={lastPageNo}
            className={pageClass}
            onClick={() => setPage(lastPage)}
          />
        </>
      }
    </div>
)

export default PagerPages
