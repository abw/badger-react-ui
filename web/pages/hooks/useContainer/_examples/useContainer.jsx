import { useContainer, Icon } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useContainer, Icon } from '@abw/badger-react-ui

const UseContainerExample = () => {
  const { ref, width, height, breakpoint, boxWidth, boxHeight } = useContainer()

  return (
    <div
      ref={ref}
      className="flex wrap center start gap-4 pad-4 small border"
    >
      <Tag item={width} px label="Width" color="green" icon="arrows-right"/>
      <Tag item={breakpoint} color="teal"/>
      <Tag item={height} px label="Height" color="blue" icon="arrows"/>
      <Tag item={boxWidth} px label="Box Width" color="green" icon="arrows-right"/>
      <Tag item={boxHeight} px label="Box Height" color="blue" icon="arrows"/>
    </div>
  )
}

const Tag = ({ item, label, color, icon, px }) =>
  <div className={`inverse ${color} pad-a-2 flex middle gap-2 bdr-1`}>
    { icon && <Icon name={icon}/> }
    { label && <span>{label}:</span> }
    <span className="font-mono">{item}{ px && 'px' }</span>
  </div>

export default UseContainerExample