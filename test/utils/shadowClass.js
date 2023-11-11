import { test, expect } from 'vitest'
import { shadowClass } from '@/src/index.jsx'

test(
  'shadowClass() should return "shadow-1" for true values',
  () => expect(
    shadowClass(true)
  ).toBe(
    'shadow-1'
  )
)

test(
  'shadowClass() should return "shadow-N" for integers values',
  () => expect(
    shadowClass(3)
  ).toBe(
    'shadow-3'
  )
)

test(
  'shadowClass() should return null for anything else',
  () => expect(
    shadowClass('yes')
  ).toBe(
    null
  )
)
