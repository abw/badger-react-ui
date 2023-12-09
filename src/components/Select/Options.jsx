import React            from 'react'
import Context          from './Context.js'
import SelectOption     from './Option.jsx'
import SelectNoOptions  from './NoOptions.jsx'
import { hasValue, isArray } from '@abw/badger-utils'

const SelectOptions = ({
  options,
  optionsRef,
  optionsClass='menu border bdr-1',
  cursor,
  selectOption,
  setCursor,
  Option=SelectOption,
  NoOptions=SelectNoOptions,
}) =>
  <div className={optionsClass} ref={optionsRef}>
    { (isArray(options) && options.length)
      ? options.map(
        (option, n) =>
          <Option
            option={option}
            active={hasValue(cursor) && options[cursor] === option}
            key={option.id ?? option.value ?? n}
            onClick={() => selectOption(option)}
            onMouseEnter={() => setCursor(n)}
          />
      )
      : <NoOptions/>
    }
  </div>

export default Context.Consumer(SelectOptions)
