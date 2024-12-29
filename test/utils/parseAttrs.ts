import { test, expect } from 'vitest'
import { parseAttrs } from '@/src/index.jsx'

test(
  'parseAttrs() should handle empty string',
  () => expect(
    parseAttrs('')
  ).toEqual({
  })
)

test(
  'parseAttrs() should parse attributes',
  () => expect(
    parseAttrs(
      'foo:bar;wiz:bang'
    )
  ).toEqual({
    foo: 'bar',
    wiz: 'bang'
  })
)

test(
  'parseAttrs() should handle whitespace between attributes',
  () => expect(
    parseAttrs(
      'a:alpha ;b:bravo; w:whisky'
    )
  ).toEqual({
    a: 'alpha',
    b: 'bravo',
    w: 'whisky'
  })
)

test(
  'parseAttrs() should handle whitespace between key and value',
  () => expect(
    parseAttrs(
      'a : alpha ; b : bravo;\nw\n:\nwhisky'
    )
  ).toEqual({
    a: 'alpha',
    b: 'bravo',
    w: 'whisky'
  })
)

test(
  'parseAttrs() should handle URL parameter format',
  () => expect(
    parseAttrs(
      'a=alpha&b=bravo & w = whisky'
    )
  ).toEqual({
    a: 'alpha',
    b: 'bravo',
    w: 'whisky'
  })
)

test(
  'parseAttrs() should set value-less params to true',
  () => expect(
    parseAttrs(
      'alpha&bravo&whisky'
    )
  ).toEqual({
    alpha: true,
    bravo: true,
    whisky: true
  })
)

