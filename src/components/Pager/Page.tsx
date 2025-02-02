import Context from './Context'
import Button  from '@/components/Button/Button'
import { pagerPageLabel } from './Utils'
import { doNothing, maybeFunction } from '@abw/badger-utils'
import { PagerPageProps } from './types'

export const PagerPage = Context.Consumer<PagerPageProps>(
  ({
    pageNo,
    text=pageNo,
    buttonClass,
    className=buttonClass,
    onClick=doNothing,
    current,
    disabled,
    pageLabel=pagerPageLabel
  }) =>
    <Button
      text={text}
      className={className}
      onClick={onClick}
      label={current ? undefined : maybeFunction(pageLabel, pageNo) as string}
      aria-current={current ? 'page' : undefined}
      disabled={disabled}
    />
)

export default PagerPage

