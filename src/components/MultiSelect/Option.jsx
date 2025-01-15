import React   from 'react'
import Context from './Context.js'
import Icon    from '@/components/Icon/Icon'
import { defaultRenderer, iconNameOrProps } from '@/src/utils/index'

const Option = ({
  option,
  optionClass='option',
  selectedIcon='check',
  unselectedIcon,
  noIconClass='no-icon',
  displayOption=defaultRenderer('displayOption'),
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

export const MultiSelectOption = Context.Consumer(Option)
export default MultiSelectOption
