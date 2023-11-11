import { test, expect } from 'vitest'
import { radiusClass } from '@/src/index.jsx'

test(
  'radiusClass() should return "bdr-N" for integers values',
  () => expect(
    radiusClass(3)
  ).toBe(
    'bdr-3'
  )
)

test(
  'radiusClass() should return null for anything else',
  () => expect(
    radiusClass('yes')
  ).toBe(
    null
  )
)
