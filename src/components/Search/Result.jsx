import React       from 'react'
import Context     from './Context.js'
import { classes } from '@/src/utils/classes.js'

const SearchResult = ({
  result,
  active,
  activeRef,
  onClick,
  onMouseEnter,
  displayResult,
  resultClass='item',
  activeClass='active'
}) =>
  <div
    className={classes(resultClass, { [activeClass]: active })}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    ref={active ? activeRef : null}
  >
    {displayResult(result)}
  </div>

export default Context.Consumer(SearchResult)
