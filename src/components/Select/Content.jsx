import React       from 'react'
import Context     from './Context.js'
import SelectInput from './Input.jsx'
import SelectMenu  from './Menu.jsx'
import { classes } from '@/src/utils/classes.js'

const Content = ({
  onKeyDown,
  isOpen,

  selectClass='select',
  openClass='open',
  closedClass='closed',
  Input=SelectInput,
  Menu=SelectMenu,
}) =>
  <div
    className={
      classes(
        selectClass,
        isOpen ? openClass : closedClass,
      )
    }
    onKeyDown={onKeyDown}
  >
    <Input/>
    { Boolean(isOpen) &&
      <Menu/>
    }
  </div>

export default Context.Consumer(Content)
