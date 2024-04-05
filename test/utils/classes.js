import { test, expect } from 'vitest'
import { classTrueVHTRBL, classVHTRBL, classes, fixValues } from '@/src/index.jsx'

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
