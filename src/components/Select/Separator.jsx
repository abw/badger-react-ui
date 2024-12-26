import React       from 'react'
import Context     from './Context.js'

const Separator = ({
  separatorClass='separator',
}) =>
  <div className={separatorClass}></div>

export default Context.Consumer(Separator)
