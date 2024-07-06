import { hasValue, isInteger, isObject, maybeFunction, splitList } from '@abw/badger-utils'

export const joinClasses = classes =>
  classes
    .filter(hasValue)
    .join(' ')

export const setKeys = props =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )

export const classes = (...inputs) => joinClasses(
  inputs.flatMap(
    input =>
      isObject(input)
        ? setKeys(input)
        : input
  )
)

export const colorClass = color => {
  if (! color) {
    return null
  }
  const [range, fore, back, foreDark, backDark] = color.split('-')
  return classes(
    range,
    foregroundClass(fore),
    backgroundClass(back),
    foregroundDarkClass(foreDark),
    backgroundDarkClass(backDark)
  )
}

export const sizeColorProps = ({
  className,
  size,
  color,
  ...props
}) => ({
  ...props,
  className: classes(
    className, size,
    colorClass(color)
  )
})

export const styleProps = (
  {
    className,
    size,
    color,
    border,
    radius,
    shadow,
    grid,
    stack,
    gap,
    pad,
    mar,
    padding=pad,
    margin=mar,
    ...props
  },
  ...more
) => ({
  ...props,
  className: classes(
    ...more,
    className, size,
    colorClass(color),
    borderClass(border),
    radiusClass(radius),
    shadowClass(shadow),
    gridClass(grid),
    gapClass(gap),
    stackClass(stack),
    paddingClass(padding),
    marginClass(margin),
  )
})

export const stylePropsClasses = (...args) => {
  const { className, ...rest } = styleProps(...args)
  return classes(className, rest)
}

export const borderClass = border =>
  classTrueInt(border, 'border', b => `border bdw-${b}`)

export const shadowClass = shadow =>
  classTrueInt(shadow, 'shadow-1', s => `shadow-${s}`)

export const gridClass = grid =>
  classTrue(grid, 'grid-1', g => `grid-${g}`)

export const stackClass = stack =>
  stack ? `stack-${stack}` : null

export const paddingClass = padding =>
  classTrueVHTRBL(padding, 'pad')

export const marginClass = margin =>
  classTrueVHTRBL(margin, 'mar')

export const radiusClass = radius =>
  classTrueInt(radius, 'bdr-1', r => `bdr-${r}`)

export const foregroundClass = stop =>
  classInt(stop, s => `fgc-${s}`)

export const backgroundClass = stop =>
  classInt(stop, s => `bgc-${s}`)

export const foregroundDarkClass = stop =>
  classInt(stop, s => `fgd-${s}`)

export const backgroundDarkClass = stop =>
  classInt(stop, s => `bgd-${s}`)

export const gapClass = gap =>
  classTrue(
    gap,
    'gap-1',
    g => {
      const gaps = splitList(g)
      return gaps.length === 2
        ? fixValues('gap', ['v', 'h'], gaps)
        : `gap-${g}`
    }
  )

export const classInt = (c, i) =>
  isInteger(parseInt(c))
    ? maybeFunction(i, c)
    : null

export const classTrue = (c, t, f) =>
  c === true
    ? t
    : hasValue(c)
      ? maybeFunction(f, c)
      : null

export const classTrueInt = (c, t, i) =>
  c === true
    ? t
    : parseInt(c)
      ? maybeFunction(i, c)
      : null

export const classTrueVHTRBL = (c, prefix) =>
  classTrue(
    c,
    prefix,
    v => classVHTRBL(prefix, splitList(v))
  )

export const classVHTRBL = (prefix, values) =>
  values.length === 2
    ? fixValues(prefix, ['v', 'h'], values)
    : values.length === 4
      ? fixValues(prefix, ['t', 'r', 'b', 'l'], values)
      : values.map( v => `${prefix}-${v}` ).join(' ')

export const fixValues = (prefix, midfixes, values) =>
  values
    .map( (v, n) => `${prefix}-${midfixes[n]}-${v}` )
    .join(' ')
