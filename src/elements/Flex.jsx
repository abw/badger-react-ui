import React from 'react'
import { stylePropsClasses } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'

export const Flex = ({
  children,
  ...props
}) =>
  <div className={stylePropsClasses(props, 'flex')}>
    {children}
  </div>

export default Themed(Flex, 'Flex')