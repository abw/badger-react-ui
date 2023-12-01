import React   from 'react'
import Context from './Context.js'

const SelectNoOptions = ({
  noOptionsClass='no-options'
}) =>
  <div className={noOptionsClass}>
    No options
  </div>

export default Context.Consumer(SelectNoOptions)
