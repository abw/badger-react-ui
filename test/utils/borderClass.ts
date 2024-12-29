import { test, expect } from 'vitest'
import { borderClass } from '@/src/utils/classes'

test(
  'borderClass(undefined) => null',
  () => expect(
    borderClass(undefined)
  ).toBe(null)
)

test(
  'borderClass(true) => "border"',
  () => expect(
    borderClass(true)
  ).toBe(
    'border'
  )
)

test(
  'borderClass(3) => "border bdw-N"',
  () => expect(
    borderClass(3)
  ).toBe(
    'border bdw-3'
  )
)

test(
  'borderClass("yes") => null',
  () => expect(
    borderClass('yes')
  ).toBe(
    null
  )
)
