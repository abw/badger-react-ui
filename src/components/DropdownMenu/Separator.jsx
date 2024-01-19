import React        from 'react'
import { classes }  from '@/src/utils/classes.js'

const Separator = ({
  option,
  separatorClass='separator',
}) =>
  <div className={classes(separatorClass, option.className)}>
  </div>

export default Separator