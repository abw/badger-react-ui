import React    from 'react'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'
import Icon from '@/components/Icon/Icon.jsx'

const Column = ({
  item,
  setNodeRef,
  style,
  listeners,
  toggleVisibleColumn,
  isVisible,
  ...props
}) =>
  <div
    ref={setNodeRef} style={style}
    className={`sortable item flex middle border mar-b-2 ${item.moved ? 'moved' : ''}`}
    {...props}
  >
    <Checkbox
      className="fluid flex middle"
      key={item.id}
      checked={isVisible[item.id]|| false}
      onChange={() => toggleVisibleColumn(item.id)}
      text={item.label}
    />
    <div
      {...listeners}
      className="pad-h-2"
    >
      <Icon name="drag" className="drag-handle"/>
    </div>
  </div>

export default Column