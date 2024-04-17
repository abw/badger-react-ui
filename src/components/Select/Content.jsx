import React        from 'react'
import Context      from './Context.js'
import SelectInput  from './Input.jsx'
import SelectMenu   from './Menu.jsx'
import SelectSearch from './Search.jsx'
import { classes }  from '@/src/utils/classes.js'

const Content = ({
  onKeyDown,
  isOpen,
  search,
  selectClass='select',
  openClass='open',
  closedClass='closed',
  Input=SelectInput,
  Search=SelectSearch,
  Menu=SelectMenu,
  wide
}) =>
  <div
    className={
      classes(
        selectClass,
        isOpen ? openClass : closedClass,
        { wide }
      )
    }
    onKeyDown={onKeyDown}
  >
    <Input/>
    { Boolean(isOpen) && Boolean(search) &&
      <Search/>
    }
    { Boolean(isOpen) &&
      <Menu/>
    }
  </div>

export const SelectContent = Context.Consumer(Content)
export default SelectContent
