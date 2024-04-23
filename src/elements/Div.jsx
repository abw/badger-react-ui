import React from 'react'
import { stylePropsClasses } from '@/src/utils/classes.js'
import { Themed } from '@/src/Theme.jsx'

export const Div = ({
  style,
  content,
  children,
  ...props
}) =>
  <div className={stylePropsClasses(props)} style={style}>
    {content||children}
  </div>

export default Themed(Div, 'Div')