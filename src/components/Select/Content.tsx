import Context from './Context'
import SelectMenu from './Menu'
import SelectInput from './Input'
import SelectSearch from './Search'
import { classes } from '@/src/utils/classes'

export const SelectContent = Context.Consumer(
  ({
    onKeyDown,
    isOpen,
    search,
    selectClass,
    openClass,
    closedClass,
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
