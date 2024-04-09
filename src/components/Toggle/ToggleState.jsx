import React from 'react'
import useToggle from './useToggle.jsx'

const ToggleState = props => {
  const [ , Toggle] = useToggle(props)
  return <Toggle/>
}

export default ToggleState