export const UNKNOWN    = 'unknown'
export const MOBILE     = 'mobile'
export const TABLET     = 'tablet'
export const LAPTOP     = 'laptop'
export const DESKTOP    = 'desktop'
export const WIDESCREEN = 'widescreen'
export const ULTRA      = 'ultra'

export const breakpoints = {
  [UNKNOWN]:    0,
  [MOBILE]:     480,
  [TABLET]:     720,
  [LAPTOP]:     960,
  [DESKTOP]:    1200,
  [WIDESCREEN]: 1440,
}
const defaults = {
  breakpoints,
  largest: ULTRA
}

export const widthBreakpoint = (
  width: number = 0,
  options = { }
) => {
  const config = { ...defaults, ...options }
  const breakpoint = Object.entries(config.breakpoints)
    .find(
      ([ , bpWidth]) => width <= bpWidth
    )
  return breakpoint
    ? breakpoint[0]
    : config.largest
}

export const elementWidth = (element: HTMLElement | Window = window) =>
  typeof element === 'undefined'
    ? undefined
    : (element as Window).innerWidth

export const elementBreakpoint = (element: HTMLElement, options: object) =>
  widthBreakpoint(elementWidth(element), options)


