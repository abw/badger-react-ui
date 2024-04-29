import { useFloating as useFUI, offset as fuiOffset } from '@floating-ui/react'

export const useFloating = ({
  offset=8,
  placement,
  right
}) => useFUI({
  middleware: [fuiOffset(parseInt(offset))],
  placement: placement || (right
    ? 'bottom-end'
    : 'bottom-start')
})

export default useFloating