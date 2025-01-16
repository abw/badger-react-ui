import {
  hasValue, isInteger, isObject, isString, ListSource, maybeFunction, splitList
} from '@abw/badger-utils'
import {
  MaybeAnyStringFunction, MaybeNumberFunction, MaybeNumberString,
  MaybeNumberStringFunction, MaybeString, MaybeTrueOrNumberString,
  PropsObject,
} from '../types'

/**
 * Concatenates CSS class strings with spaces.  Any null values are ignored.
 *
 * @example
 * joinClasses(['a', null, 'b'])   // => 'a b'
 */
export const joinClasses = (classes: Array<string|null>)  =>
  classes
    .filter(hasValue)
    .join(' ')

/**
 * Returns an array of all the keys in an object for which the corresponding
 * value is truthy.

 * @example
 * setKeys({ a: true, b: 10, c: false, d: null })   // => ['a', 'b']
 */
export const setKeys = (props: object) =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )


export type ClassesItem = string | object | null | undefined | Array<ClassesItem>
export type ClassesItems = ClassesItem[]

/**
 * Returns a concatenated string of all CSS classes passed, either as
 * strings, in nested arrays, or as keys of objects for which the
 * corresponding values are truthy.
 * @example
 * classes(
 *   'a',
 *   ['b', 'c'],
 *   { d: true, e: false, d: null }
 * )   // => 'a b c d'
 */

export const classes = (...inputs: ClassesItems) => joinClasses(
  inputs.flatMap(
    input =>
      isObject(input)
        ? setKeys(input as object)
        : input as string | null
  )
)

/**
 * Low level utility to return a number or parsed string as an integer.
 *
 * @example
 * asInteger(11)         // => 11
 * asInteger('11')       // => 11
 * asInteger('11.12')    // => null
 * asInteger('eleven')   // => null
 */

export const asInteger = (
  int: MaybeNumberString | boolean,
): number | null => {
  if (isInteger(int)) {
    return int as number
  }
  if (isString(int)) {
    const n: number = parseInt(int as string)
    if (! isNaN(n)) {
      return n
    }
  }
  return null
}

/**
 * Low level utility to generate a CSS class from an argument which may be
 * boolean `true` or some other value.  If the first argument is `true` then
 * it returns the string passed as the second argument.  If the first value is
 * `undefined` or `null` it returns `null`.  Otherwise it returns the third
 * argument if it's a string, or if it's a function, the result of calling
 * the function passing the first argument as a parameter.
 *
 * @example
 * classTrue(null, 'x', 'y')         // => null
 * classTrue(true, 'yes', 'no')      // => 'yes'
 * classTrue(false, 'yes', 'no')     // => 'no'
 * classTrue(11, 'quiet', 'loud')    // => 'loud'
 * classTrue(11, 'quiet', n => `volume-${n}`);  // => 'volume-11'
 */

export const classTrue = (
  c: boolean | unknown,
  t: string,
  f: MaybeAnyStringFunction
): string | null =>
  c === true
    ? t
    : hasValue(c)
      ? maybeFunction(f, c)
      : null

/**
 * Low level utility to generate a CSS class from an argument which may be
 * an integer value or a string which can be parsed as an integer.  The first
 * argument may be `undefined`, `null`, `false` or a string which can't be
 * parsed as an integer.  In that case the function returns `null`.  Otherwise
 * it returns the second argument, or if the second argument is a function
 * then it returns the results of calling the function, passing the first
 * argument as a parameter.
 *
 * @example
 * classInt(null, 'ignored');         // => null
 * classInt(11, 'eleven');            // => 'eleven'
 * classInt(11, n => `volume-${n}`);  // => 'volume-11'
 */

export const classInt = (
  int: MaybeNumberString | boolean,
  result: MaybeNumberFunction
) => {
  const n = asInteger(int)
  return (hasValue(n))
    ? maybeFunction(result, n)
    : null
}

/**
 * Low level utility to generate a CSS class from an argument which may be
 * a boolean `true` value, an integer or a string which can be parsed as an
 * integer.  If the first argument is `true` then the string passed as the
 * second argument is returned.  Otherwise, if the second argument is an
 * integer or a string which can be parsed as an integer, then it returns
 * the string passed as the third argument, or where the third argument is a
 * function, the result of calling the function passing the parsed integer
 * value as a parameter.  IN all other cases it returns null.
 *
 * @example
 * classInt(null, 'ignored');         // => null
 * classInt(11, 'eleven');            // => 'eleven'
 * classInt(11, n => `volume-${n}`);  // => 'volume-11'
 */

export const classTrueInt = (
  c: MaybeTrueOrNumberString,
  t: string,
  i: MaybeNumberStringFunction
): string | null =>
  c === true
    ? t
    : classInt(c, i)

/**
 * CSS utility function to generate a CSS class for adding a border.
 * If the argument is boolean `true` then it returns `"border"`.  If it's
 * an integer or a string which can be parsed as an integer then it returns
 * `"border bdw-<N>"`. The `"bdw-"` prefix is used to denote a border width
 * and `<N>` is the integer value for the border width in pixels.  In all
 * other cases it returns `null`.
 *
 * @example
 * borderClass(true)  // => 'border'
 * borderClass(2)     // => 'border bdw-2'
 * borderClass("3")   // => 'border bdw-3'
 */

export const borderClass = (border: MaybeTrueOrNumberString): string | null =>
  classTrueInt(border, 'border', b => `border bdw-${b}`)

/**
 * CSS utility function to generate a CSS class for defining the border radius.
 * If the `radius` argument is boolean `true` then it returns `"bdr-1"`.  If
 * it's an integer or a string which can be parsed as an integer then it
 * returns `"bdr-<radius>"`. The `"bdr-"` prefix is used to denote a border
 * radius class and `<border>` is the integer value for the border width in
 * radius units (0.25rem by default).  In all other cases it returns `null`.
 *
 * @example
 * radiusClass(true)  // => 'bdr-1'
 * radiusClass(2)     // => 'bdr-2'
 * radiusClass("3")   // => 'bdr-3'
 * radiusClass(false) // => null
 */

export const radiusClass = (radius: MaybeTrueOrNumberString) =>
  classTrueInt(radius, 'bdr-1', r => `bdr-${r}`)

/**
 * CSS utility function to generate a CSS class for adding a shadow.
 * If the argument is boolean `true` then it returns `"shadow-1"`.  If it's
 * an integer or a string which can be parsed as an integer then it returns
 * `"shadow-<N>"`. The `"shadow-"` prefix is used to denote a shadow class
 * and `<N>` is an integer value from 1 to 5 to denote the border size. In all
 * other cases it returns `null`.
 *
 * @example
 * shadowClass(true)  // => 'shadow-1'
 * shadowClass(2)     // => 'shadow-2'
 * shadowClass("3")   // => 'shadow-3'
 */

export const shadowClass = (shadow: MaybeTrueOrNumberString): string | null =>
  classTrueInt(shadow, 'shadow-1', s => `shadow-${s}`)

/**
 * CSS utility function to generate a CSS class for defining a layout with a
 * number of columns. If the argument is boolean `true` then it returns
 * `"grid-1"`.  If it's any other defined value then it returns `"grid-<N>"`.
 * The `"grid-"` prefix is used to denote a grid layout class and `<N>` is
 * the number of columns from 1 to 16, or a special keyword like `"fit"` or
 *`"fill`".  In all other cases it returns `null`.
 *
 * @example
 * gridClass(true)  // => 'grid-1'
 * gridClass(2)     // => 'grid-2'
 * gridClass("3")   // => 'grid-3'
 * gridClass("fit") // => 'grid-fit'
 */

export const gridClass = (grid: MaybeTrueOrNumberString): string | null =>
  classTrue(grid, 'grid-1', g => `grid-${g}`)

/**
 * CSS utility function to generate a CSS class for defining a gap for use
 * with flex or grid layouts.  If the `gap` argument is boolean `true` then
 * it returns `"gap-1"`.  If the argument is an array or a string with two
 * whitespace delimited values (e.g. `"2 4") then it will return a class
 * string with separate vertical (`"gap-v-<N>") and horizontal (`"gap-h-<N>")
 * values (e.g. `"gap-v-2 gap-h-4"`).  Otherwise it will return a combined
 * `"gap-<gap>"` value.  In all other cases it returns `null`.
 *
 * @example
 * gapClass(true)  // => 'gap-1'
 * gridClass(2)     // => 'grid-2'
 * gridClass("3")   // => 'grid-3'
 * gridClass("fit") // => 'grid-fit'
 */

export const gapClass = (gap: MaybeTrueOrNumberString | Array<number|string>) =>
  classTrue(
    gap,
    'gap-1',
    g => {
      const gaps = splitList(g as ListSource)
      return gaps.length === 2
        ? fixValues('gap', ['v', 'h'], gaps)
        : `gap-${g}`
    }
  )

/**
 * CSS utility function to generate a CSS class for breakpoint stacking.
 * If the argument is truthy then it returns `"stack-<breakpoint>""` where
 *`"<breakpoint>"` is a string argument, e.g. `"mobile"`, `"tablet"`, etc.
 * Otherwise it returns `null`.
 *
 * @example
 * stackClass('mobile')  // => 'stack-mobile'
 * stackClass(false)     // => null
 */

export const stackClass = (breakpoint: MaybeString | boolean): string | null =>
  breakpoint ? `stack-${breakpoint}` : null

/**
 * CSS utility function to generate a CSS class for the foreground color stop.
 * If the argument is an integer or string which can be parsed as an integer
 * then it returns a string of the form `"fgc-<stop>"`. Otherwise it returns
 * `null`.
 *
 * @example
 * foregroundClass(50)    // => 'fgc-50'
 * foregroundClass('50')  // => 'fgc-50'
 * foregroundClass(false) // => null
 */

export const foregroundClass = (stop: MaybeNumberString | boolean): string | null =>
  classInt(stop, s => `fgc-${s}`)

/**
 * CSS utility function to generate a CSS class for the background color stop.
 * If the argument is an integer or string which can be parsed as an integer
 * then it returns a string of the form `"bgc-<stop>"`. Otherwise it returns `null`.
 *
 * @example
 * backgroundClass(50)    // => 'bgc-50'
 * backgroundClass('50')  // => 'bgc-50'
 * backgroundClass(false) // => null
 */

export const backgroundClass = (stop: MaybeNumberString | boolean): string | null =>
  classInt(stop, s => `bgc-${s}`)

/**
 * CSS utility function to generate a CSS class for the foreground color stop
 * in dark mode. If the argument is an integer or string which can be parsed
 * as an integer then it returns a string of the form `"fgd-<stop>"`.
 * Otherwise it returns `null`.
 *
 * @example
 * foregroundDarkClass(50)    // => 'fgd-50'
 * foregroundDarkClass('50')  // => 'fgd-50'
 * foregroundDarkClass(false) // => null
 */

export const foregroundDarkClass = (stop: MaybeNumberString | boolean): string | null =>
  classInt(stop, s => `fgd-${s}`)

/**
 * CSS utility function to generate a CSS class for the background color stop
 * in dark mode. If the argument is an integer or string which can be parsed
 * as an integer then it returns a string of the form `"bgd-<stop>"`.
 * Otherwise it returns `null`.
 *
 * @example
 * backgroundDarkClass(50)    // => 'bgd-50'
 * backgroundDarkClass('50')  // => 'bgd-50'
 * backgroundDarkClass(false) // => null
 */

export const backgroundDarkClass = (stop: MaybeNumberString | boolean): string | null =>
  classInt(stop, s => `bgd-${s}`)

/**
 * CSS utility function to generate a CSS class for various color components.
 * The `color` argument should be a string starting with the name of a color
 * range, optionally followed by one to four color stop number separated by
 * hyphens. These correspond to the foreground stop (`"fgc-NN"`), background
 * stop (`"bgd-NN"`), foreground stop in dark mode (`"fgd-NN"`) and background
 * stop in dark mode (`"bgd-NN"`).  Any of the color stop numbers may be
 * omitted.  If the `color` string is not truthy then it returns `null`.
 *
 * @example
 * colorClass('red')              // => 'red'
 * colorClass('red-30')           // => 'red fgc-30'
 * colorClass('red-30-80')        // => 'red fgc-30 bgc-80'
 * colorClass('red-30-80')        // => 'red fgc-30 bgc-80'
 * colorClass('red-30-80-70-20')  // => 'red fgc-30 bgc-80 fgd-70 bgd-20'
 */

export const colorClass = (color: MaybeString): string | null => {
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

/**
 * CSS utility function to generate a CSS class for multiple values with a
 * `prefix` and intermediate `midfixes` strings.
 *
 * @example
 * fixValues('pad', ['v', 'h'], [1, 2])  // => 'pad-v-1 pad-h-2'
 */

export const fixValues = (prefix: string, midfixes: string[], values: string[]) : string =>
  values
    .map( (v, n) => `${prefix}-${midfixes[n]}-${v}` )
    .join(' ')

/**
 * CSS utility function to generate a CSS class for multiple values with a
 * `prefix` and two `"v"` and `"h"` intermediate strings (for vertical
 * and horizontal directions), or four `"t"`, `"r"`, `"b"` and `"l"` strings.
 * If the `values` array doesn't contains two or four items then it generates
 * a whitespace concatenated string containing all values with only the prefix
 * applied.
 *
 * @example
 * classVHTRBL('pad', [1])            // => 'pad-1'
 * classVHTRBL('pad', [1, 2])         // => 'pad-v-1 pad-h-2'
 * classVHTRBL('pad', [1, 2, 3, 4])   // => 'pad-t-1 pad-r-2 pad-b-3 pad-l-4'
 */

export const classVHTRBL = (prefix: string, values: string[]) =>
  values.length === 2
    ? fixValues(prefix, ['v', 'h'], values)
    : values.length === 4
      ? fixValues(prefix, ['t', 'r', 'b', 'l'], values)
      : values.map( v => `${prefix}-${v}` ).join(' ')

/**
 * CSS utility function to generate a single CSS class when the `set` value is
 * a truthy value.  If the `set` value is an array or whitespace delimited
 * string with multiple components then it generates multiple classes with
 * the `prefix` and either two `"v"` and `"h"` intermediate strings (for
 * vertical and horizontal directions), or four `"t"`, `"r"`, `"b"` and `"l"`
 * strings.
 * @example
 * classTrueVHTRBL(true, 'pad')           // => 'pad'
 * classTrueVHTRBL(10, 'pad')             // => 'pad-10'
 * classTrueVHTRBL('1 2', 'pad')          // => 'pad-v-1 pad-h-2'
 * classTrueVHTRBL([1, 2, 3, 4], 'pad')   // => 'pad-t-1 pad-r-2 pad-b-3 pad-l-4'
 */

export const classTrueVHTRBL = (set: boolean | unknown, prefix: string) =>
  classTrue(
    set,
    prefix,
    v => classVHTRBL(prefix, splitList(v as ListSource))
  )

/**
 * CSS utility function to generate a string containing one or more padding
 * utility classes.
 * @example
 * paddingClass(true)                 // => 'pad'
 * paddingClass(10)                   // => 'pad-10'
 * paddingClass('10')                 // => 'pad-10'
 * paddingClass('2 4')                // => 'pad-v-2 pad-h-4'
 * paddingClass('2 4 6 8')            // => 'pad-t-2 pad-r-4 pad-b-6 pad-l-8'
 * paddingClass([2 4])                // => 'pad-v-2 pad-h-4'
 * paddingClass([2 4 6 8])            // => 'pad-t-2 pad-r-4 pad-b-6 pad-l-8'
 */

export const paddingClass = (padding: boolean | unknown)  =>
  classTrueVHTRBL(padding, 'pad')

/**
 * CSS utility function to generate a string containing one or more margin
 * utility classes.
 * @example
 * marginClass(true)                 // => 'mar'
 * marginClass(10)                   // => 'mar-10'
 * marginClass('10')                 // => 'mar-10'
 * marginClass('2 4')                // => 'mar-v-2 mar-h-4'
 * marginClass('2 4 6 8')            // => 'mar-t-2 mar-r-4 mar-b-6 mar-l-8'
 * marginClass([2 4])                // => 'mar-v-2 mar-h-4'
 * marginClass([2 4 6 8])            // => 'mar-t-2 mar-r-4 mar-b-6 mar-l-8'
 */

export const marginClass = (margin: boolean | unknown) =>
  classTrueVHTRBL(margin, 'mar')

/**
 * CSS utility function to extract `className`, `size` and `color` properties
 * and generate a single CSS class string from them.
 * @example
 * sizeColorProps({
 *   className: 'foo',
 *   size: 'large',
 *   color: 'red-50'
 *   volume: 11
 *  }) // => { className: 'foo large red fgc-50', volume: 11 }
 */

export const sizeColorProps = (
  {
    className,
    size,
    color,
    ...props
  }: SizeColorProps
) => ({
  ...props,
  className: classes(
    className,
    size,
    colorClass(color)
  )
})

export interface SizeColorProps extends PropsObject {
  className?: MaybeString,
  size?: MaybeString,
  color?: MaybeString,
}

/**
 * CSS utility function to extract all special styling properties that can
 * be used to generate a CSS `className` property.
 * @example
 * styleProps({
 *   className: 'foo',
 *   size: 'large',
 *   color: 'red-50',
 *   margin: true,
 *   padding: [1, 2]
 *   volume: 11
 *  })
 *  // => {
 *  //   className: 'foo large red fgc-50 mar pad-v-1 pad-h-2',
 *  //   volume: 11
 *  // }
 */

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
  }: StyleProps,
  ...more : ClassesItems
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

export interface StyleProps extends PropsObject {
  className?: MaybeString,
  size?: MaybeString,
  color?: MaybeString,
  border?: MaybeTrueOrNumberString,
  radius?: MaybeTrueOrNumberString,
  shadow?: MaybeTrueOrNumberString,
  grid?: MaybeTrueOrNumberString,
  gap?: MaybeTrueOrNumberString,
  stack?: MaybeString,
  pad?: boolean | unknown,
  mar?: boolean | unknown,
  padding?: boolean | unknown,
  margin?: boolean | unknown,
}

export const stylePropsClasses = (
  props: StyleProps,
  ...more: ClassesItems
) => {
  const { className, ...rest } = styleProps(props, ...more)
  return classes(className, rest)
}


