import { hasValue } from '@abw/badger-utils'
import { Generator } from '@abw/react-context'

const PagerContext = ({
  page=0,
  pages,
  buttonClass='outline',
  pageClass=buttonClass,
  currentPageClass='solid',
  render,
  ...props
}) => {
  const firstPage   = 0
  const firstPageNo = 1
  const lastPage    = pages - 1
  const lastPageNo  = pages
  const pageNo      = page + 1
  const prevPage    = page > 0 ? page - 1 : null
  const prevPageNo  = hasValue(prevPage) ? prevPage + 1 : null
  const nextPage    = page < lastPage ? page + 1 : null
  const nextPageNo  = hasValue(nextPage) ? nextPage + 1 : null

  return render({
    page, pageNo,
    firstPage, firstPageNo,
    lastPage, lastPageNo,
    pages,
    prevPage, prevPageNo,
    nextPage, nextPageNo,
    buttonClass,
    pageClass,
    currentPageClass,
    ...props
  })
}

const generated = Generator(PagerContext)
export const usePager = generated.Use
export default generated