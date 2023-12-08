import React   from 'react'
import Context from './Context.js'
import Button  from '../Button/Button.jsx'

const PagerNext = ({
  nextPage,
  setPage,
  buttonClass,
  nextClass=buttonClass,
  nextIcon='arrow-right'
}) =>
  <Button
    className={nextClass}
    icon={nextIcon}
    onClick={() => setPage(nextPage)}
    disabled={! nextPage}
  />

export default Context.Consumer(PagerNext)

