import { useState, useEffect, useRef } from 'react'
import { widthBreakpoint } from '@/src/utils/breakpoint'

export const useContainer = (options={}) => {
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>()
  const [boxWidth, setBoxWidth] = useState<number>()
  const [boxHeight, setBoxHeight] = useState<number>()
  const [breakpoint, setBreakpoint] = useState<string>()
  const ref = useRef()

  useEffect(
    () => {
      if (!ref.current || typeof ResizeObserver === 'undefined')
        return
      const resizeObserver = new ResizeObserver(
        entries => {
          const entry  = entries[0]
          const rect   = entry.contentRect
          const border = entry.borderBoxSize[0]
          if (rect) {
            const width = Math.round(rect.width)
            const height = Math.round(rect.height)
            setWidth(width)
            setHeight(height)
            setBreakpoint(widthBreakpoint(width, options))
          }
          if (border) {
            const width = Math.round(border.inlineSize)
            const height = Math.round(border.blockSize)
            setBoxWidth(width)
            setBoxHeight(height)
          }
        }
      )
      resizeObserver.observe(ref.current)
      return () => resizeObserver.disconnect()
    },
    [options]
  )

  return { ref, width, height, boxWidth, boxHeight, breakpoint }
}

export default useContainer