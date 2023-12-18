import React        from 'react'
import { classes }  from '@/src/utils/classes.js'

const Separator = ({
  className,
  separatorClass='separator',
}) =>
  <div className={classes(separatorClass, className)}>
  </div>

export default Separator