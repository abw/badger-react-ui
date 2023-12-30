import React        from 'react'
import { classes }  from '@/src/utils/classes.js'

const Heading = ({
  option,
  optionClass='item no-hover',
  headingClass='heading',
}) =>
  <h4 className={classes(headingClass, optionClass, option.className)}>
    {option.heading}
  </h4>

export default Heading