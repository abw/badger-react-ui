import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import {
  extractGridProp, useContainer, gapClass, stylePropsClasses, classes
} from '@/src/index.jsx'

export const Grid = ({
  gap,
  children,
  ...props
}) => {
  // grok grid props
  const { ref, width, breakpoint } = useContainer()
  const [gridProp, otherProps] = extractGridProp(props, breakpoint)

  console.log(`width is ${width}, breakpoint is ${breakpoint}, grid class is ${gridProp}`)

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