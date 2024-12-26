import { test, expect } from 'vitest'
import { coerceNumber } from '@/src/index.jsx'

test(
  'coerceNumber(23) -> 23',
  () => expect( coerceNumber(23) ).toBe( 23 )
)

test(
  'coerceNumber("23") -> 23',
  () => expect( coerceNumber('23') ).toBe( 23 )
)