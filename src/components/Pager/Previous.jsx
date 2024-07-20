import React   from 'react'
import Context from './Context.js'
import Button  from '../Button/Button.jsx'
import { noValue } from '@abw/badger-utils'
import { maybeFunction } from '@abw/badger-utils'
import { pagerPreviousPageLabel } from './Utils.js'

const PagerPrevious = ({
  prevPage,
  setPage,
  buttonClass,
  prevClass=buttonClass,
  prevIcon='arrow-left',
  prevLabel=pagerPreviousPageLabel
}) =>
  <Button
    className={prevClass}
    icon={prevIcon}
    onClick={() => setPage(prevPage)}
    disabled={noValue(prevPage)}
    label={maybeFunction(prevLabel, prevPage)}
  />

export default Context.Consumer(PagerPrevious)

