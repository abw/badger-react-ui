import Context from './Context'
import Icon    from '@/components/Icon/Icon'
import { iconNameOrProps } from '@/src/utils/index'
import { MultiSelectOptionProps } from './types'

export const MultiSelectOption = Context.Consumer<
  MultiSelectOptionProps
>(
  ({
    option,
    optionClass,
    selectedIcon,
    unselectedIcon,
    noIconClass,
    displayOption,
    optionIsSelected
  }) =>
    <div className={optionClass}>
      <div>
        {displayOption(option)}
      </div>
      { optionIsSelected(option)
        ? <Icon {...iconNameOrProps(selectedIcon)}/>
        : unselectedIcon
          ? <Icon {...iconNameOrProps(unselectedIcon)}/>
          : <div className={noIconClass}/>
      }
    </div>
)

export default MultiSelectOption
