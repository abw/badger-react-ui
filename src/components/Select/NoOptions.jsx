import React   from 'react'
import Context from './Context.js'

const SelectNoOptions = ({
  noOptionsClass='no-options',
  noOptions='No options'
}) =>
  <div className={noOptionsClass}>
    {noOptions}
  </div>

export default Context.Consumer(SelectNoOptions)
