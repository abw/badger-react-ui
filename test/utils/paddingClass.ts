import { test, expect } from 'vitest'
import { paddingClass } from '@/src/utils/classes'

test(
  'paddingClass(undefined) => null',
  () => expect(
    paddingClass(undefined)
  ).toBe(
    null
  )
)

test(
  'paddingClass(null) => null',
  () => expect(
    paddingClass(null)
  ).toBe(
    null
  )
)

test(
  'paddingClass(2) => pad-2',
  () => expect(
    paddingClass(2)
  ).toBe(
    'pad-2'
  )
)

test(
  'paddingClass("2") => pad-2',
  () => expect(
    paddingClass('2')
  ).toBe(
    'pad-2'
  )
)

test(
  'paddingClass("2 3") => pad-v-2 pad-h-3',
  () => expect(
    paddingClass('2 3')
  ).toBe(
    'pad-v-2 pad-h-3'
  )
)

test(
  'paddingClass("2 3 4 5") => pad-t-2 pad-r-3 pad-b-4 pad-l-5',
  () => expect(
    paddingClass('2 3 4 5')
  ).toBe(
    'pad-t-2 pad-r-3 pad-b-4 pad-l-5'
  )
)

test(
  'paddingClass([2, 3]) => pad-v-2 pad-h-3',
  () => expect(
    paddingClass([2, 3])
  ).toBe(
    'pad-v-2 pad-h-3'
  )
)

test(
  'paddingClass([2, 3, "4", "5"])',
  () => expect(
    paddingClass([2, 3, '4', '5'])
  ).toBe(
    'pad-t-2 pad-r-3 pad-b-4 pad-l-5'
  )
)
