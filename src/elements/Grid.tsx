import { Themed } from '@/src/Theme'
import {
  extractGridProp, useContainer, gapClass, stylePropsClasses, classes,
  StyleProps
} from '@/src/index'
import { GridType } from './types'

export const Grid: GridType = ({
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
          stylePropsClasses(otherProps as StyleProps)
        )
      }
    >
      {children}
    </div>
  )
}

export default Themed(Grid, 'Grid')