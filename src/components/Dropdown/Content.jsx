import React           from 'react'
import Context         from './Context.js'
import DropdownTrigger from './Trigger.jsx'
import DropdownMenu    from './Menu.jsx'
import { classes } from '@/src/utils/classes.js'

const Content = ({
  className='dropdown',
  openClass='open',
  closedClass='closed',
  isOpen,
  right,
  wide,
  Trigger=DropdownTrigger,
  Menu=DropdownMenu
}) =>
  <div
    className={
      classes(
        className,
        isOpen ? openClass : closedClass,
        { right, wide }
      )
    }
  >
    <Trigger/>
    { isOpen &&
      <Menu/>
    }
  </div>

export default Context.Consumer(Content)