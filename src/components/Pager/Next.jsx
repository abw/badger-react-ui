import React   from 'react'
import Context from './Context.js'
import Button  from '../Button/Button.jsx'
import { maybeFunction } from '@abw/badger-utils'
import { pagerNextPageLabel } from './Utils.js'

const PagerNext = ({
  nextPage,
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
    label={maybeFunction(nextLabel, nextPage)}
  />

export default Context.Consumer(PagerNext)

