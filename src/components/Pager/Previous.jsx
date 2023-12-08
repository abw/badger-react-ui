import React   from 'react'
import Context from './Context.js'
import Button  from '../Button/Button.jsx'
import { noValue } from '@abw/badger-utils'

const PagerPrevious = ({
  prevPage,
  // prevPageNo,
  setPage,
  // prevText,
  buttonClass,
  prevClass=buttonClass,
  prevIcon='arrow-left'
}) =>
  <Button
    className={prevClass}
    icon={prevIcon}
    onClick={() => setPage(prevPage)}
    disabled={noValue(prevPage)}
  />

export default Context.Consumer(PagerPrevious)

