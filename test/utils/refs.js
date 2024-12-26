import { test, expect } from 'vitest'
import { mergeRefs } from '@/src/index.jsx'

//-- mergeRefs ---------------------------------------------------------------
test(
  'mergeRefs() one',
  () => {
    let values = [ ]
    const foo = value => values.push(`foo:${value}`)
    const bar = value => values.push(`bar:${value}`)
    const baz = { }
    const merged = mergeRefs([foo, bar, baz, null])
    merged(11)
    expect(values).toStrictEqual([
      'foo:11', 'bar:11'
    ])
    expect(baz).toStrictEqual({ current: 11 })
  }
)
