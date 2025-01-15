import { test, expect } from 'vitest'
import { gapClass } from '@/src/utils/classes'

test(
  'gapClass(true) => gap-1',
  () => expect(
    gapClass(true)
  ).toBe(
    'gap-1'
  )
)

test(
  'gapClass("none") => gap-none',
  () => expect(
    gapClass('none')
  ).toBe(
    'gap-none'
  )
)

test(
  'gapClass(2) => gap-2',
  () => expect(
    gapClass(2)
  ).toBe(
    'gap-2'
  )
)

test(
  'gapClass("2") => gap-2',
  () => expect(
    gapClass('2')
  ).toBe(
    'gap-2'
  )
)

test(
  'gapClass("2 4") => gap-v-2 gap-h-4',
  () => expect(
    gapClass('2 4')
  ).toBe(
    'gap-v-2 gap-h-4'
  )
)

test(
  'gapClass([2 4]) => gap-v-2 gap-h-4',
  () => expect(
    gapClass([2, 4])
  ).toBe(
    'gap-v-2 gap-h-4'
  )
)

test(
  'gapClass("0 4") => gap-v-0 gap-h-4',
  () => expect(
    gapClass('0 4')
  ).toBe(
    'gap-v-0 gap-h-4'
  )
)

test(
  'gapClass("none 4") => gap-v-none gap-h-4',
  () => expect(
    gapClass('none 4')
  ).toBe(
    'gap-v-none gap-h-4'
  )
)

