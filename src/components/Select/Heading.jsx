import React       from 'react'
import Context     from './Context.js'
import { classes } from '@/src/utils/classes'

const Heading = ({
  option,
  optionClass='item no-hover',
  headingClass='heading',
  displayHeading,
}) =>
  <div
    className={
      classes(
        optionClass,
        headingClass,
        option.indent ? `indent-${option.indent}` : null,
      )
    }
  >
    {displayHeading(option)}
  </div>

export default Context.Consumer(Heading)
