import {
  useFloating as useFUI,
  offset as fuiOffset,
  size,
  ElementRects,
  Placement
} from '@floating-ui/react'
import { isNumber } from '@abw/badger-utils'

export type FloatingSize = { width?: string, height?: string }
export type FloatingMatchFunction = (ref: ElementRects['reference']) => FloatingSize
export type FloatingMiddlewareProps = {
  offset?: number | string,
  matchWidth?: boolean
  matchHeight?: boolean
}
export type FloatingPlacementProps = {
  placement?: Placement,
  defaultPlacement?: Placement,
  right?: boolean,
  vertical?: 'bottom' | 'top'
}
export type UseFloatingProps = FloatingMiddlewareProps & FloatingPlacementProps

const floatingMatch = (fn: FloatingMatchFunction) => size({
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
}: FloatingMiddlewareProps = { }) => {
  const middleware = [
    fuiOffset(
      isNumber(offset)
        ? offset
        : parseInt(offset))
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
}: FloatingPlacementProps = { }) =>
  placement || defaultPlacement ||
    ( right
      ? `${vertical}-end`
      : `${vertical}-start`
    )

export const useFloating = (props: UseFloatingProps) =>
  useFUI({
    middleware: floatingMiddleware(props),
    placement: floatingPlacement(props)
  })

export default useFloating