import React from 'react'
import { Themed } from '@/src/Theme'
import {
  extractGridProp, useContainer, gapClass, stylePropsClasses, classes
} from '@/src/index'

export const Grid = ({
  gap,
  children,
  ...props
}) => {
  // grok grid props
  const { ref, breakpoint } = useContainer()
  const [gridProp, otherProps] = extractGridProp(props, breakpoint)

  return (
    <div
      ref={ref}
      className={
        classes(
          gridProp,
          gapClass(gap),
          stylePropsClasses(otherProps)
        )
      }
    >
      {children}
    </div>
  )
}

export default Themed(Grid, 'Grid')