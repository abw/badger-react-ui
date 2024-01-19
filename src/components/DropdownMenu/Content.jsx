import React           from 'react'
import Context         from './Context.js'
import DropdownTrigger from './Trigger.jsx'
import DropdownOptions from './Options.jsx'
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
  Options=DropdownOptions
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
      <Options/>
    }
  </div>

export default Context.Consumer(Content)