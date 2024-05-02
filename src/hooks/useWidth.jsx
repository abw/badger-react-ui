import { useState, useEffect } from 'react'
import { widthBreakpoint, elementWidth } from '@/src/utils/breakpoint.js'

export const useWidth = (options={}) => {
  const element = options.element || window
  const [width, setWidth] = useState(false)
  const [breakpoint, setBreakpoint] = useState(false)

  const getWidthAndBreakpoint = () => {
    const ew = elementWidth(element)
    setWidth(ew)
    const bp = widthBreakpoint(ew, options)
    setBreakpoint(bp)
  }

  useEffect(
    () => {
      if (typeof element !== 'undefined' && element.addEventListener) {
        getWidthAndBreakpoint()
        // console.log(`adding resize handler`)
        element.addEventListener('resize', getWidthAndBreakpoint)
        return () => {
          // console.log(`removing resize handler`)
          element.removeEventListener('resize', getWidthAndBreakpoint)
        }
      }
    },
    [ ]
  )

  return { width, breakpoint }
}

export default useWidth