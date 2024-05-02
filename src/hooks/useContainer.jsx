import { useState, useEffect, useRef } from 'react'
import { widthBreakpoint } from '@/src/utils/breakpoint.js'

export const useContainer = (options={}) => {
  const [width, setWidth] = useState(false)
  const [height, setHeight] = useState(false)
  const [breakpoint, setBreakpoint] = useState(false)
  const ref = useRef()

  useEffect(
    () => {
      if (!ref.current) return
      const resizeObserver = new ResizeObserver(
        entries => {
          const entry = entries[0]
          const rect  = entry.contentRect
          if (rect) {
            const width = Math.round(rect.width)
            const height = Math.round(rect.height)
            setWidth(width)
            setHeight(height)
            setBreakpoint(widthBreakpoint(width, options))
          }
        }
      )
      resizeObserver.observe(ref.current)
      return () => resizeObserver.disconnect()
    },
    []
  )

  return { ref, width, height, breakpoint }
}

export default useContainer