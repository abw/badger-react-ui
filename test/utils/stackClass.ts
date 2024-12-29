import { test, expect } from 'vitest'
import { stackClass } from '@/src/utils/classes'

test(
  'stackClass(undefined) => null',
  () => expect(
    stackClass(undefined)
  ).toBe(
    null
  )
)

test(
  'stackClass(false) => null',
  () => expect(
    stackClass(false)
  ).toBe(
    null
  )
)

test(
  'stackClass("mobile") => stack-mobile',
  () => expect(
    stackClass('mobile')
  ).toBe(
    'stack-mobile'
  )
)
