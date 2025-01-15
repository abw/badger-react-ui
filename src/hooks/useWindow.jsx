import { useState, useEffect } from 'react'
import { widthBreakpoint } from '@/src/utils/breakpoint'

export const useWindow = (options={}) => {
  const element = options.element || window
  const [width, setWidth] = useState(false)
  const [height, setHeight] = useState(false)
  const [breakpoint, setBreakpoint] = useState(false)

  const getWidthAndBreakpoint = () => {
    if (! element) {
      return
    }
    setWidth(element.innerWidth)
    setHeight(element.innerHeight)
    const bp = widthBreakpoint(element.innerWidth, options)
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

  return { width, height, breakpoint }
}

export default useWindow