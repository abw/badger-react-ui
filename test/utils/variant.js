import { expect, test } from 'vitest'
import { lookupVariant } from '@/src/index.jsx'

const variantsFooBar = {
  foo: { foo: true, name: 'foo' },
  bar: { bar: true, name: 'bar' },
}

const variantsWithDefault = {
  default: { foo: false, bar: false, name: 'default' },
  ...variantsFooBar
}

test(
  'explicit variant',
  () => expect(
    lookupVariant(
      { variant: 'foo' },
      variantsFooBar
    )
  ).toEqual(
    variantsFooBar.foo
  )
)

test(
  'explicit variant with other option',
  () => expect(
    lookupVariant(
      { bar: true, variant: 'foo' },
      variantsFooBar
    )
  ).toEqual(
    variantsFooBar.foo
  )
)

test(
  'implicit variant foo',
  () => expect(
    lookupVariant(
      { foo: true },
      variantsFooBar
    )
  ).toEqual(
    variantsFooBar.foo
  )
)

test(
  'implicit variant bar',
  () => expect(
    lookupVariant(
      { bar: true },
      variantsFooBar
    )
  ).toEqual(
    variantsFooBar.bar
  )
)

test(
  'default variant value',
  () => expect(
    lookupVariant(
      { variant: 'missing' },
      variantsFooBar,
      { hello: 'World' }
    )
  ).toEqual(
    { hello: 'World' }
  )
)

test(
  'default variant',
  () => expect(
    lookupVariant(
      { wiz: true, bang: true },
      variantsWithDefault
    )
  ).toEqual(
    variantsWithDefault.default
  )
)

test(
  'invalid variant',
  () => expect(
    lookupVariant(
      { variant: 'another' },
      variantsWithDefault
    )
  ).toEqual(
    variantsWithDefault.default
  )
)
