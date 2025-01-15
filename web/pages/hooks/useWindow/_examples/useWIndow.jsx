import { Icon, useWindow } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { useWindow, Icon } from '@abw/badger-react-ui

const UseWindowExample = () => {
  const { width, height, breakpoint } = useWindow()

  return (
    <div className="flex gap-4 wrap center start small">
      <Tag item={width} px label="Width" color="green" icon="arrows-right"/>
      <Tag item={breakpoint} color="teal"/>
      <Tag item={height} px label="Height" color="blue" icon="arrows"/>
    </div>
  )
}

const Tag = ({ item, label, color, icon, px }) =>
  <div className={`inverse ${color} pad-a-2 flex middle gap-2 bdr-1`}>
    { icon && <Icon name={icon}/> }
    { label && <span>{label}:</span> }
    <span className="font-mono">{item}{ px && 'px' }</span>
  </div>

export default UseWindowExample