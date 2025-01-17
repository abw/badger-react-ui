import RadioOption from './Option.js'
import { useId } from 'react'
import { Themed }  from '@/src/Theme'
import { classes } from '@/src/utils/classes'
import { isObject } from '@abw/badger-utils'
import { RadioOptionItem, RadioOptionObject, RadioType } from './types.js'

const Radio: RadioType = ({
  name,
  value,
  options,
  className='radioset',
  disabled,
  Option=RadioOption,
  ...props
}) => {
  const id = useId()
  return (
    <div className={classes(className, { disabled })}>
      { options.map(
        (opt: RadioOptionItem) => {
          const option = isObject(opt)
            ? opt as RadioOptionObject
            : { value: opt, label: opt } as RadioOptionObject
          return (
            <Option
              name={name || id}
              key={option.value as string | number}
              option={option}
              checked={option.value === value}
              value={value}
              {...props}
            />
          )
        }
      )}
    </div>
  )
}

export default Themed(Radio, 'Radio')
