import { test, expect } from 'vitest'
import { joinClasses } from '@/src/utils/classes'

test(
  'joinClasses() should ignore undefined values',
  () => expect(
    // @ts-expect-error - undefined is not allowed but should be ignored
    joinClasses([undefined, 'foo'])
  ).toBe(
    'foo'
  )
)
test(
  'joinClasses should ignore null values',
  () => expect(
    joinClasses(['foo', null, 'bar'])
  ).toBe(
    'foo bar'
  )
)

