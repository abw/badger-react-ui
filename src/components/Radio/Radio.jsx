import React       from 'react'
import RadioOption from './Option.jsx'
import { Themed }  from '@/src/Theme.jsx'
import { classes } from '@/src/utils/classes.js'
import { isObject } from '@abw/badger-utils'

const Radio = ({
  value,
  options,
  className='radioset',
  disabled,
  Option=RadioOption,
  ...props
}) =>
  <div className={classes(className, { disabled })}>
    { options.map(
      opt => {
        const option = isObject(opt)
          ? opt
          : { value: opt, label: opt }
        return (
          <Option
            key={option.value}
            option={option}
            checked={option.value === value}
            value={value}
            {...props}
          />
        )
      }
    )}
  </div>

export default Themed(Radio, 'Radio')

