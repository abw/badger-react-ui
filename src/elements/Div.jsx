import React from 'react'
import { stylePropsClasses } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'

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