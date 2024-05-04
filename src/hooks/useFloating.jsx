import {
  useFloating as useFUI,
  offset as fuiOffset,
  size
} from '@floating-ui/react'

const floatingMatch = fn => size({
  apply({ rects, elements }) {
    Object.assign(
      elements.floating.style,
      fn(rects.reference)
    )
  }
})

const floatingMatchWidth = floatingMatch(
  ref => ({ width: `${ref.width}px` })
)

const floatingMatchHeight = floatingMatch(
  ref => ({ height: `${ref.height}px` })
)

export const useFloating = ({
  offset=0,
  placement,
  matchWidth,
  matchHeight,
  right
} = { }) => {
  const middleware = [
    fuiOffset(parseInt(offset))
  ]
  if (matchWidth) {
    middleware.push(floatingMatchWidth)
  }
  if (matchHeight) {
    middleware.push(floatingMatchHeight)
  }
  return useFUI({
    middleware,
    placement: placement || (right
      ? 'bottom-end'
      : 'bottom-start')
  })
}

export default useFloating