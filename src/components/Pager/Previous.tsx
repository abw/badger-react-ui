import Context from './Context'
import Button  from '@/components/Button/Button'
import { doNothing, noValue } from '@abw/badger-utils'
import { maybeFunction } from '@abw/badger-utils'
import { pagerPreviousPageLabel } from './Utils'

export const PagerPrevious = Context.Consumer(
  ({
    prevPage,
    prevPageNo,
    setPage,
    buttonClass,
    prevClass=buttonClass,
    prevIcon='arrow-left',
    prevLabel=pagerPreviousPageLabel
  }) =>
    <Button
      className={prevClass}
      icon={prevIcon}
      onClick={prevPage ? () => setPage(prevPage) : doNothing}
      disabled={noValue(prevPage)}
      label={maybeFunction(prevLabel, prevPageNo)}
    />
)

export default PagerPrevious

