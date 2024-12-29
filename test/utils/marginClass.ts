import { test, expect } from 'vitest'
import { marginClass } from '@/src/utils/classes'

test(
  'marginClass(undefined) => null',
  () => expect(
    marginClass(undefined)
  ).toBe(
    null
  )
)

test(
  'marginClass(null) => null',
  () => expect(
    marginClass(null)
  ).toBe(
    null
  )
)

test(
  'marginClass(2) => mar-2',
  () => expect(
    marginClass(2)
  ).toBe(
    'mar-2'
  )
)

test(
  'marginClass("2 3") => mar-v-2 mar-h-3',
  () => expect(
    marginClass('2 3')
  ).toBe(
    'mar-v-2 mar-h-3'
  )
)

test(
  'marginClass("2 3 4 5") => mar-t-2 mar-r-3 mar-b-4 mar-l-5',
  () => expect(
    marginClass('2 3 4 5')
  ).toBe(
    'mar-t-2 mar-r-3 mar-b-4 mar-l-5'
  )
)

test(
  "marginClass([2, 3) => mar-v-2 mar-h-3",
  () => expect(
    marginClass([2, 3])
  ).toBe(
    'mar-v-2 mar-h-3'
  )
)

test(
  "marginClass([2, 3, '4', '5']) => mar-t-2 mar-r-3 mar-b-4 mar-l-5",
  () => expect(
    marginClass([2, 3, '4', '5'])
  ).toBe(
    'mar-t-2 mar-r-3 mar-b-4 mar-l-5'
  )
)

