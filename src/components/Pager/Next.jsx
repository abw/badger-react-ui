import React   from 'react'
import Context from './Context.js'
import Button  from '@/components/Button/Button'
import { maybeFunction } from '@abw/badger-utils'
import { pagerNextPageLabel } from './Utils.js'

const PagerNext = ({
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
    onClick={() => setPage(nextPage)}
    disabled={! nextPage}
    label={maybeFunction(nextLabel, nextPageNo)}
  />

export default Context.Consumer(PagerNext)

