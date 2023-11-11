import { test, expect } from 'vitest'
import { borderClass } from '@/src/index.jsx'

test(
  'borderClass() should return "border" for true values',
  () => expect(
    borderClass(true)
  ).toBe(
    'border'
  )
)

test(
  'borderClass() should return "border bdw-N" for integers values',
  () => expect(
    borderClass(3)
  ).toBe(
    'border bdw-3'
  )
)

test(
  'borderClass() should return null for anything else',
  () => expect(
    borderClass('yes')
  ).toBe(
    null
  )
)
