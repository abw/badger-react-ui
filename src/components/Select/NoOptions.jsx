import React   from 'react'
import Context from './Context.js'

const NoOptions = ({
  noOptionsClass='none',
  noOptions='No options'
}) =>
  <div className={noOptionsClass}>
    {noOptions}
  </div>

export const SelectNoOptions = Context.Consumer(NoOptions)
export default SelectNoOptions
