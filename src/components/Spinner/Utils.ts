import { hasValue, isBoolean } from '@abw/badger-utils'

export const iconParts = (
  mods: Array<string | null>,
  classes: Array<string | null>
) =>
  [
    mods.length
      ? '-' + mods.filter(hasValue).join('-')
      : '',
    classes.length
      ? '.' + classes.filter(hasValue).join('.')
      /* v8 ignore next */
      : ''
  ].join('')

export const iconStroke = (
  mods: Array<string | null>,
  classes: Array<string | null>,
  stroke: boolean | string,
  width: string | number | undefined,
  light: string | number,
  dark: string | number
) => {
  if (stroke) {
    classes.push(`stc-${light}`, `std-${dark}`)
    if (! isBoolean(stroke)) {
      mods.push(stroke)
    }
    else if (width) {
      mods.push(`strokeWidth=${width}`)
    }
  }
  else {
    mods.push('stroke=none')
  }
}

export const iconFill = (
  mods: Array<string | null>,
  classes: Array<string | null>,
  fill: boolean,
  light: string | number,
  dark: string | number
) => {
  if (fill) {
    classes.push(`flc-${light}`, `fld-${dark}`)
  }
  else {
    mods.push('fill=none')
  }
}
