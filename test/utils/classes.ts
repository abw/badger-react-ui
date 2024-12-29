import { test, expect } from 'vitest'
import {
  classes,
  sizeColorProps, styleProps, stylePropsClasses,
  asInteger, classInt, classTrue, classTrueInt, setKeys
} from '@/src/utils/classes'


// -- asInteger() ------------------------------------------------------------
test(
  'asInteger(11) => 11',
  () => expect(
    asInteger(11)
  ).toBe(
    11
  )
)
test(
  'asInteger("11") => 11',
  () => expect(
    asInteger('11')
  ).toBe(
    11
  )
)
test(
  'asInteger(11.12) => null',
  () => expect(
    asInteger(11.12)
  ).toBe(
    null
  )
)
test(
  'asInteger("eleven") => null',
  () => expect(
    asInteger('eleven')
  ).toBe(
    null
  )
)

// -- classTrue() ------------------------------------------------------------
test(
  'classTrue(null) => null',
  () => expect(
    classTrue(null, 'a', 'b')
  ).toBe(
    null
  )
)

test(
  'classTrue(undefined) => null',
  () => expect(
    classTrue(undefined, 'a', 'b')
  ).toBe(
    null
  )
)

test(
  'classTrue(false, a, b) => b',
  () => expect(
    classTrue(false, 'a', 'b')
  ).toBe(
    'b'
  )
)

test(
  'classTrue(true, a, b) => a',
  () => expect(
    classTrue(true, 'a', 'b')
  ).toBe(
    'a'
  )
)

test(
  'classTrue(11, a, b) => b',
  () => expect(
    classTrue(11, 'a', 'b')
  ).toBe(
    'b'
  )
)

test(
  'classTrue(11, a, b => ...) => n(11)',
  () => expect(
    classTrue(11, 'a', n => `number-${n}`)
  ).toBe(
    'number-11'
  )
)

// -- classInt() ------------------------------------------------------------
test(
  'classInt(null, a) => null',
  () => expect(
    classInt(null, 'a')
  ).toBe(
    null
  )
)

test(
  'classInt(undefined, a) => null',
  () => expect(
    classInt(undefined, 'a')
  ).toBe(
    null
  )
)

test(
  'classInt(false, a) => null',
  () => expect(
    classInt(false, 'a')
  ).toBe(
    null
  )
)

test(
  'classInt(11, a) => a',
  () => expect(
    classInt(11, 'eleven')
  ).toBe(
    'eleven'
  )
)

test(
  'classInt(11, n => ...) => n(11)',
  () => expect(
    classInt(11, n => `number-${n}`)
  ).toBe(
    'number-11'
  )
)

test(
  'classInt("11", a) => a',
  () => expect(
    classInt('11', 'eleven')
  ).toBe(
    'eleven'
  )
)

test(
  'classInt("11", n => ...) => n(11)',
  () => expect(
    classInt('11', n => `number-${n}`)
  ).toBe(
    'number-11'
  )
)

test(
  'classInt("11.12", n => ...) => n(11)',
  () => expect(
    classInt('11.12', n => `number-${n}`)
  ).toBe(
    'number-11'
  )
)

// -- classTrueInt() ------------------------------------------------------------
test(
  'classTrueInt(null, a, b) => null',
  () => expect(
    classTrueInt(null, 'a', 'b')
  ).toBe(
    null
  )
)

test(
  'classTrueInt(undefined, a, b) => null',
  () => expect(
    classTrueInt(undefined, 'a', 'b')
  ).toBe(
    null
  )
)

test(
  'classTrueInt(false, a, b) => null',
  () => expect(
    classTrueInt(false, 'a', 'b')
  ).toBe(
    null
  )
)

test(
  'classTrueInt(true, a, b) => a',
  () => expect(
    classTrueInt(true, 'a', 'b')
  ).toBe(
    'a'
  )
)

test(
  'classTrueInt(11, a, b) => b',
  () => expect(
    classTrueInt(11, 'ten', 'eleven')
  ).toBe(
    'eleven'
  )
)

test(
  'classTrueInt(11, a, n => ...) => n(11)',
  () => expect(
    classTrueInt(11, 'ten', n => `number-${n}`)
  ).toBe(
    'number-11'
  )
)

test(
  'classTrueInt("11", a, b) => b',
  () => expect(
    classTrueInt('11', 'ten', 'eleven')
  ).toBe(
    'eleven'
  )
)

test(
  'classTrueInt("11", a, n => ...) => n(11)',
  () => expect(
    classTrueInt('11', 'ten', n => `number-${n}`)
  ).toBe(
    'number-11'
  )
)

test(
  'classTrueInt("11.12", a, n => ...) => n(11)',
  () => expect(
    classTrueInt('11.12', 'a', n => `number-${n}`)
  ).toBe(
    'number-11'
  )
)

// -- setKeys() ------------------------------------------------------------
test(
  'setKeys()',
  () => expect(
    setKeys({
      a: false,
      b: true,
      c: 0,
      d: 10,
      e: 'eleven',
      f: null,
      g: undefined
    })
  ).toStrictEqual([
    'b', 'd', 'e'
  ])
)

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

//-- sizeColorProps ----------------------------------------------------------
test(
  'sizeColorProps({ })',
  () => expect(
    sizeColorProps({ })
  ).toStrictEqual({
    className: ''
  })
)

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
