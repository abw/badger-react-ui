import React     from 'react'
import Context   from './Context.js'

const defaultPageSeparator = <>&hellip;</>

const PagerSeparator = ({
  pageSeparatorClass='separator',
  pageSeparator=defaultPageSeparator,
}) =>
  <div className={pageSeparatorClass}>
    {pageSeparator}
  </div>

export default Context.Consumer(PagerSeparator)

