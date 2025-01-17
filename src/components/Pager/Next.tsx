import Context from './Context'
import Button  from '@/components/Button/Button'
import { doNothing, maybeFunction } from '@abw/badger-utils'
import { pagerNextPageLabel } from './Utils'

export const PagerNext = Context.Consumer(
  ({
    nextPage,
    nextPageNo,
    setPage,
    buttonClass,
    nextClass=buttonClass,
    nextIcon='arrow-right',
    nextLabel=pagerNextPageLabel
  }) =>
    <Button
      className={nextClass}
      icon={nextIcon}
      onClick={nextPage ? () => setPage(nextPage) : doNothing}
      disabled={! nextPage}
      label={maybeFunction(nextLabel, nextPageNo)}
    />
)

export default PagerNext

