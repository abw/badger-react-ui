import { test, expect } from 'vitest'
import { classVHTRBL, classTrueVHTRBL, fixValues } from '@/src/utils/classes'

//-- fixValues ---------------------------------------------------------------
test(
  'fixValues(...)',
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
  'classVHTRBL() with 1 item',
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
  'classVHTRBL() with 2 items',
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
  'classVHTRBL() with 4 items',
  () => expect(
    classVHTRBL(
      'badger',
      ['one', 'two', 'three', 'four']
    )
  ).toBe(
    'badger-t-one badger-r-two badger-b-three badger-l-four'
  )
)

//-- classTrueVHTRBL ---------------------------------------------------------
test(
  'classTrueVHTRBL(true, "badger") => badger',
  () => expect(
    classTrueVHTRBL(
      true,
      'badger'
    )
  ).toBe(
    'badger'
  )
)

test(
  'classTrueVHTRBL(11, "volume") => volume-11',
  () => expect(
    classTrueVHTRBL(
      11,
      'volume'
    )
  ).toBe(
    'volume-11'
  )
)

test(
  'classTrueVHTRBL("power", "badger") => badger-power',
  () => expect(
    classTrueVHTRBL(
      'power',
      'badger'
    )
  ).toBe(
    'badger-power'
  )
)

test(
  'classTrueVHTRBL() with 2 item string',
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
  'classTrueVHTRBL() with 4 item string',
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
  'classTrueVHTRBL() with 2 item array',
  () => expect(
    classTrueVHTRBL(
      ['one', 'two'],
      'badger'
    )
  ).toBe(
    'badger-v-one badger-h-two'
  )
)

test(
  'classTrueVHTRBL() with 4 item array',
  () => expect(
    classTrueVHTRBL(
      ['one', 'two', 'three', 'four'],
      'badger'
    )
  ).toBe(
    'badger-t-one badger-r-two badger-b-three badger-l-four'
  )
)

test(
  'classTrueVHTRBL() with null',
  () => expect(
    classTrueVHTRBL(
      null,
      'badger'
    )
  ).toBe(
    null
  )
)

