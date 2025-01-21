import Context from './Context'
import SelectMenu from './Menu'
import SelectInput from './Input'
import SelectSearch from './Search'
import { classes } from '@/src/utils/classes'
import { SELECT_CLASS } from './Constants'
import { CLOSED_CLASS, OPEN_CLASS } from '@/src/constants'

export const SelectContent = Context.Consumer(
  ({
    onKeyDown,
    isOpen,
    search,
    selectClass=SELECT_CLASS,
    openClass=OPEN_CLASS,
    closedClass=CLOSED_CLASS,
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
)

export default SelectContent
