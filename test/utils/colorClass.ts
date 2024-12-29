import { test, expect } from 'vitest'
import {
  foregroundClass, backgroundClass, foregroundDarkClass, backgroundDarkClass,
  colorClass
} from '@/src/utils/classes'

//-- foregroundClass ---------------------------------------------------------
test(
  'foregroundClass(undefined) => null',
  () => expect(
    foregroundClass(undefined)
  ).toBe(
    null
  )
)

test(
  'foregroundClass(null) => null',
  () => expect(
    foregroundClass(null)
  ).toBe(
    null
  )
)

test(
  'foregroundClass(false) => null',
  () => expect(
    foregroundClass(false)
  ).toBe(
    null
  )
)

test(
  'foregroundClass(30) => fgc-30',
  () => expect(
    foregroundClass(30)
  ).toBe(
    'fgc-30'
  )
)

test(
  'foregroundClass("40") => fgc-40',
  () => expect(
    foregroundClass('40')
  ).toBe(
    'fgc-40'
  )
)

//-- backgroundClass ---------------------------------------------------------
test(
  'backgroundClass(undefined) => null',
  () => expect(
    backgroundClass(undefined)
  ).toBe(
    null
  )
)

test(
  'backgroundClass(null) => null',
  () => expect(
    backgroundClass(null)
  ).toBe(
    null
  )
)

test(
  'backgroundClass(false) => null',
  () => expect(
    backgroundClass(false)
  ).toBe(
    null
  )
)

test(
  'backgroundClass(50) => bgc-50',
  () => expect(
    backgroundClass(50)
  ).toBe(
    'bgc-50'
  )
)

test(
  'backgroundClass("60") => bgc-60',
  () => expect(
    backgroundClass('60')
  ).toBe(
    'bgc-60'
  )
)

//-- foregroundDarkClass -----------------------------------------------------
test(
  'foregroundDarkClass(undefined) => null',
  () => expect(
    foregroundDarkClass(undefined)
  ).toBe(
    null
  )
)

test(
  'foregroundDarkClass(null) => null',
  () => expect(
    foregroundDarkClass(null)
  ).toBe(
    null
  )
)

test(
  'foregroundDarkClass(false) => null',
  () => expect(
    foregroundDarkClass(false)
  ).toBe(
    null
  )
)

test(
  'foregroundDarkClass(30) => fgd-30',
  () => expect(
    foregroundDarkClass(30)
  ).toBe(
    'fgd-30'
  )
)

test(
  'foregroundDarkClass("40") => fgd-40',
  () => expect(
    foregroundDarkClass('40')
  ).toBe(
    'fgd-40'
  )
)

//-- backgroundDarkClass -----------------------------------------------------
test(
  'backgroundDarkClass(undefined) => null',
  () => expect(
    backgroundDarkClass(undefined)
  ).toBe(
    null
  )
)

test(
  'backgroundDarkClass(null) => null',
  () => expect(
    backgroundDarkClass(null)
  ).toBe(
    null
  )
)

test(
  'backgroundDarkClass(false) => null',
  () => expect(
    backgroundDarkClass(false)
  ).toBe(
    null
  )
)

test(
  'backgroundDarkClass(30) => bgd-30',
  () => expect(
    backgroundDarkClass(30)
  ).toBe(
    'bgd-30'
  )
)

test(
  'backgroundDarkClass("40") => bgd-40',
  () => expect(
    backgroundDarkClass('40')
  ).toBe(
    'bgd-40'
  )
)

//-- colorClass --------------------------------------------------------------
test(
  'colorClass(undefined) => null',
  () => expect(
    colorClass(undefined)
  ).toBe(
    null
  )
)

test(
  'colorClass(null) => null',
  () => expect(
    colorClass(null)
  ).toBe(
    null
  )
)

test(
  'colorClass("red") => "red"',
  () => expect(
    colorClass('red')
  ).toBe(
    'red'
  )
)

test(
  'colorClass("red-50") => "red fgc-50"',
  () => expect(
    colorClass('red-50')
  ).toBe(
    'red fgc-50'
  )
)

test(
  'colorClass("red-50-20") => "red fgc-50 bgd-20',
  () => expect(
    colorClass('red-50-20')
  ).toBe(
    'red fgc-50 bgc-20'
  )
)

test(
  'colorClass("red-50-20-60") => "red fgc-50 bgc-20 fgd-60"',
  () => expect(
    colorClass('red-50-20-60')
  ).toBe(
    'red fgc-50 bgc-20 fgd-60'
  )
)

test(
  'colorClass("red-50-20-60-30") => "red fgc-50 bgc-20 fgd-60 bgd-30"',
  () => expect(
    colorClass('red-50-20-60-30')
  ).toBe(
    'red fgc-50 bgc-20 fgd-60 bgd-30'
  )
)

test(
  'colorClass("red-50--60") => "red fgc-50 fgd-60"',
  () => expect(
    colorClass('red-50--60')
  ).toBe(
    'red fgc-50 fgd-60'
  )
)

test(
  'colorClass("red---60") => "red fgd-60"',
  () => expect(
    colorClass('red---60')
  ).toBe(
    'red fgd-60'
  )
)

test(
  'colorClass("red----30") => "red bgd-30"',
  () => expect(
    colorClass('red----30')
  ).toBe(
    'red bgd-30'
  )
)
