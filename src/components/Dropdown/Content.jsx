import React           from 'react'
import Context         from './Context.js'
import DropdownTrigger from './Trigger.jsx'
import DropdownBody    from './Body.jsx'
import { classes } from '@/src/utils/classes.js'

const Content = ({
  className='dropdown',
  openClass='open',
  closedClass='closed',
  isOpen,
  right,
  size,
  wide,
  Trigger=DropdownTrigger,
  Body=DropdownBody
}) =>
  <div
    className={
      classes(
        className,
        size,
        isOpen ? openClass : closedClass,
        { right, wide }
      )
    }
  >
    <Trigger/>
    { isOpen &&
      <Body/>
    }
  </div>

export default Context.Consumer(Content)