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

export const floatingMiddleware = ({
  offset=0,
  matchWidth,
  matchHeight,
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
  return middleware
}

export const floatingPlacement = ({
  placement,
  defaultPlacement,
  right,
  vertical='bottom'
} = { }) =>
  placement || defaultPlacement ||
    ( right
      ? `${vertical}-end`
      : `${vertical}-start`
    )

export const useFloating = props =>
  useFUI({
    middleware: floatingMiddleware(props),
    placement: floatingPlacement(props)
  })

export default useFloating