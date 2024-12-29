import { test, expect } from 'vitest'
import { shadowClass } from '@/src/utils/classes'

test(
  'shadowClass(undefined) => null',
  () => expect(
    shadowClass(undefined)
  ).toBe(null)
)

test(
  'shadowClass(false) => null',
  () => expect(
    shadowClass(false)
  ).toBe(null)
)

test(
  'shadowClass(true) => "shadow-1"',
  () => expect(
    shadowClass(true)
  ).toBe(
    'shadow-1'
  )
)

test(
  'shadowClass(1) => "shadow-1"',
  () => expect(
    shadowClass(1)
  ).toBe(
    'shadow-1'
  )
)

test(
  'shadowClass(3) => "shadow-3"',
  () => expect(
    shadowClass(3)
  ).toBe(
    'shadow-3'
  )
)

test(
  'shadowClass("4") => "shadow-4"',
  () => expect(
    shadowClass('4')
  ).toBe(
    'shadow-4'
  )
)

test(
  'shadowClass("yes") => null',
  () => expect(
    shadowClass('yes')
  ).toBe(
    null
  )
)
