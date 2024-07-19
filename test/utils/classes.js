import { test, expect } from 'vitest'
import {
  classTrueVHTRBL, classVHTRBL, classes, fixValues, gapClass, gridClass,
  stackClass, paddingClass, marginClass, borderClass, radiusClass,
  shadowClass, colorClass,
  foregroundClass, backgroundClass, foregroundDarkClass, backgroundDarkClass,
  sizeColorProps, styleProps, stylePropsClasses
} from '@/src/index.jsx'

//-- classes -----------------------------------------------------------------
test(
  'classes() should flatten array of class names',
  () => expect(
    classes(
      [undefined, 'foo'],
      ['bar', null],
      [undefined, 'baz', null],
    )
  ).toBe(
    'foo bar baz'
  )
)

test(
  'classes() should pass objects to setKeys',
  () => expect(
    classes(
      [undefined, 'alpha'],
      ['bravo', null],
      { charlie: null, whisky: true }
    )
  ).toBe(
    'alpha bravo whisky'
  )
)

//-- fixValues ---------------------------------------------------------------
test(
  'fixValues()',
  () => expect(
    fixValues(
      'badger',
      ['one', 'two', 'three'],
      ['alpha', 'bravo', 'whisky']
    )
  ).toBe(
    'badger-one-alpha badger-two-bravo badger-three-whisky'
  )
)

//-- classVHTRBL -------------------------------------------------------------
test(
  'classVHTRBL() 2',
  () => expect(
    classVHTRBL(
      'badger',
      ['one', 'two']
    )
  ).toBe(
    'badger-v-one badger-h-two'
  )
)

test(
  'classVHTRBL() 4',
  () => expect(
    classVHTRBL(
      'badger',
      ['one', 'two', 'three', 'four']
    )
  ).toBe(
    'badger-t-one badger-r-two badger-b-three badger-l-four'
  )
)

test(
  'classVHTRBL() 1',
  () => expect(
    classVHTRBL(
      'badger',
      ['magic']
    )
  ).toBe(
    'badger-magic'
  )
)

//-- classTrueVHTRBL ---------------------------------------------------------
test(
  'classTrueVHTRBL() 1',
  () => expect(
    classTrueVHTRBL(
      'magic',
      'badger'
    )
  ).toBe(
    'badger-magic'
  )
)

test(
  'classTrueVHTRBL() 2',
  () => expect(
    classTrueVHTRBL(
      'one two',
      'badger'
    )
  ).toBe(
    'badger-v-one badger-h-two'
  )
)

test(
  'classTrueVHTRBL() 4',
  () => expect(
    classTrueVHTRBL(
      'one two three four',
      'badger'
    )
  ).toBe(
    'badger-t-one badger-r-two badger-b-three badger-l-four'
  )
)

test(
  'classTrueVHTRBL() null',
  () => expect(
    classTrueVHTRBL(
      null,
      'badger'
    )
  ).toBe(
    null
  )
)


//-- gapClass ----------------------------------------------------------------
test(
  'gapClass() true',
  () => expect(
    gapClass(true)
  ).toBe(
    'gap-1'
  )
)

test(
  'gapClass() none',
  () => expect(
    gapClass('none')
  ).toBe(
    'gap-none'
  )
)

test(
  'gapClass() 2',
  () => expect(
    gapClass('2')
  ).toBe(
    'gap-2'
  )
)

test(
  'gapClass() 2 4',
  () => expect(
    gapClass('2 4')
  ).toBe(
    'gap-v-2 gap-h-4'
  )
)

test(
  'gapClass() 0 4',
  () => expect(
    gapClass('0 4')
  ).toBe(
    'gap-v-0 gap-h-4'
  )
)

test(
  'gapClass() none 4',
  () => expect(
    gapClass('none 4')
  ).toBe(
    'gap-v-none gap-h-4'
  )
)

//-- gridClass ---------------------------------------------------------------
test(
  'gridClass()',
  () => expect(
    gridClass(null)
  ).toBe(null)
)

test(
  'gridClass()',
  () => expect(
    gridClass(null)
  ).toBe(null)
)

test(
  'gridClass(true)',
  () => expect(
    gridClass(true)
  ).toBe('grid-1')
)

test(
  'gridClass(1)',
  () => expect(
    gridClass(1)
  ).toBe('grid-1')
)

test(
  'gridClass(2)',
  () => expect(
    gridClass(2)
  ).toBe('grid-2')
)

//-- stackClass --------------------------------------------------------------
test(
  'stackClass()',
  () => expect(
    stackClass(null)
  ).toBe(null)
)

test(
  'stackClass("tablet")',
  () => expect(
    stackClass('tablet')
  ).toBe('stack-tablet')
)

//-- paddingClass ------------------------------------------------------------
test(
  'paddingClass()',
  () => expect(
    paddingClass()
  ).toBe(null)
)

test(
  'paddingClass(2)',
  () => expect(
    paddingClass(2)
  ).toBe(
    'pad-2'
  )
)

test(
  'paddingClass("2 3")',
  () => expect(
    paddingClass('2 3')
  ).toBe(
    'pad-v-2 pad-h-3'
  )
)

test(
  'paddingClass("2 3 4 5")',
  () => expect(
    paddingClass('2 3 4 5')
  ).toBe(
    'pad-t-2 pad-r-3 pad-b-4 pad-l-5'
  )
)

//-- marginClass -------------------------------------------------------------
test(
  'marginClass()',
  () => expect(
    marginClass()
  ).toBe(null)
)

test(
  'marginClass(2)',
  () => expect(
    marginClass(2)
  ).toBe(
    'mar-2'
  )
)

test(
  'marginClass("2 3")',
  () => expect(
    marginClass('2 3')
  ).toBe(
    'mar-v-2 mar-h-3'
  )
)

test(
  'marginClass("2 3 4 5")',
  () => expect(
    marginClass('2 3 4 5')
  ).toBe(
    'mar-t-2 mar-r-3 mar-b-4 mar-l-5'
  )
)

//-- borderClass -------------------------------------------------------------
test(
  'borderClass()',
  () => expect(
    borderClass()
  ).toBe(null)
)

test(
  'borderClass(true)',
  () => expect(
    borderClass(true)
  ).toBe(
    'border'
  )
)

test(
  'borderClass(2)',
  () => expect(
    borderClass(2)
  ).toBe(
    'border bdw-2'
  )
)

//-- shadowClass -------------------------------------------------------------
test(
  'shadowClass()',
  () => expect(
    shadowClass()
  ).toBe(null)
)

test(
  'shadowClass(true)',
  () => expect(
    shadowClass(true)
  ).toBe(
    'shadow-1'
  )
)

test(
  'shadowClass(1)',
  () => expect(
    shadowClass(1)
  ).toBe(
    'shadow-1'
  )
)

test(
  'shadowClass(2)',
  () => expect(
    shadowClass(2)
  ).toBe(
    'shadow-2'
  )
)

//-- radiusClass -------------------------------------------------------------
test(
  'radiusClass()',
  () => expect(
    radiusClass()
  ).toBe(null)
)

test(
  'radiusClass(2)',
  () => expect(
    radiusClass(2)
  ).toBe(
    'bdr-2'
  )
)

//-- foregroundClass ---------------------------------------------------------
test(
  'foregroundClass()',
  () => expect(
    foregroundClass()
  ).toBe(null)
)

test(
  'foregroundClass(3)',
  () => expect(
    foregroundClass(3)
  ).toBe('fgc-3')
)

test(
  'foregroundClass("3")',
  () => expect(
    foregroundClass('3')
  ).toBe('fgc-3')
)

//-- backgroundClass ---------------------------------------------------------
test(
  'backgroundClass()',
  () => expect(
    backgroundClass()
  ).toBe(null)
)

test(
  'backgroundClass(3)',
  () => expect(
    backgroundClass(3)
  ).toBe('bgc-3')
)

test(
  'backgroundClass("3")',
  () => expect(
    backgroundClass('3')
  ).toBe('bgc-3')
)

//-- foregroundDarkClass -----------------------------------------------------
test(
  'foregroundDarkClass()',
  () => expect(
    foregroundDarkClass()
  ).toBe(null)
)

test(
  'foregroundDarkClass(3)',
  () => expect(
    foregroundDarkClass(3)
  ).toBe('fgd-3')
)

test(
  'foregroundDarkClass("3")',
  () => expect(
    foregroundDarkClass('3')
  ).toBe('fgd-3')
)

//-- backgroundDarkClass -----------------------------------------------------
test(
  'backgroundDarkClass()',
  () => expect(
    backgroundDarkClass()
  ).toBe(null)
)

test(
  'backgroundDarkClass(3)',
  () => expect(
    backgroundDarkClass(3)
  ).toBe('bgd-3')
)

test(
  'backgroundDarkClass("3")',
  () => expect(
    backgroundDarkClass('3')
  ).toBe('bgd-3')
)

//-- colorClass --------------------------------------------------------------
test(
  'colorClass()',
  () => expect(
    colorClass()
  ).toBe(null)
)

test(
  'colorClass("red")',
  () => expect(
    colorClass('red')
  ).toBe('red')
)

test(
  'colorClass("red-50")',
  () => expect(
    colorClass('red-50')
  ).toBe('red fgc-50')
)

test(
  'colorClass("red-50-20")',
  () => expect(
    colorClass('red-50-20')
  ).toBe('red fgc-50 bgc-20')
)

test(
  'colorClass("red-50-20-60")',
  () => expect(
    colorClass('red-50-20-60')
  ).toBe('red fgc-50 bgc-20 fgd-60')
)

test(
  'colorClass("red-50-20-60-30")',
  () => expect(
    colorClass('red-50-20-60-30')
  ).toBe('red fgc-50 bgc-20 fgd-60 bgd-30')
)

test(
  'colorClass("red-50--60")',
  () => expect(
    colorClass('red-50--60')
  ).toBe('red fgc-50 fgd-60')
)

test(
  'colorClass("red---60")',
  () => expect(
    colorClass('red---60')
  ).toBe('red fgd-60')
)

test(
  'colorClass("red----30")',
  () => expect(
    colorClass('red----30')
  ).toBe('red bgd-30')
)

//-- sizeColorProps ----------------------------------------------------------
test(
  'sizeColorProps({ ... })',
  () => expect(
    sizeColorProps({
      className: 'foo',
      size: 'large',
      color: 'red-50',
      another: 'prop'
    })
  ).toStrictEqual({
    another: 'prop',
    className: 'foo large red fgc-50'
  })
)

//-- styleProps --------------------------------------------------------------
test(
  'styleProps({ ... })',
  () => expect(
    styleProps({
      className: 'foo',
      size: 'large',
      color: 'red-50',
      border: '2',
      radius: 2,
      another: 'prop'
    })
  ).toStrictEqual({
    another: 'prop',
    className: 'foo large red fgc-50 border bdw-2 bdr-2'
  })
)

//-- stylePropsClasses -------------------------------------------------------
test(
  'stylePropsClasses({ ... })',
  () => expect(
    stylePropsClasses(
      {
        className: 'foo',
        size: 'large',
        color: 'red-50',
        border: '2',
        radius: 2,
        another: true,
        exclude: false
      },
      'bar', 'baz'
    )
  ).toBe(
    'bar baz foo large red fgc-50 border bdw-2 bdr-2 another'
  )
)
