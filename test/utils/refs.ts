import { test, expect } from 'vitest'
import { mergeRefs } from '@/src/index'

//-- mergeRefs ---------------------------------------------------------------
test(
  'mergeRefs() one',
  () => {
    const values: string[] = [ ]
    const foo = (value: string) => values.push(`foo:${value}`)
    const bar = (value: string) => values.push(`bar:${value}`)
    const baz = { }
    // @ts-expect-error - invalid value should be handled gracefully
    const merged = mergeRefs([foo, bar, baz, null])
    merged(11)
    expect(values).toStrictEqual([
      'foo:11', 'bar:11'
    ])
    expect(baz).toStrictEqual({ current: 11 })
  }
)
