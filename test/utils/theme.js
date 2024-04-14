import { expect, test } from 'vitest'
import { themedProps } from '@/src/index.jsx'

const variant = {
  foo: { foo: true, name: 'foo' },
  bar: { bar: true, name: 'bar' },
}

const theme1 = {
  variant
}

test(
  'explicit variant',
  () => expect(
    themedProps(
      { variant: 'foo', extra: 'cheese' },
      theme1
    )
  ).toEqual(
    { ...variant.foo, extra: 'cheese' }
  )
)

/*
test(
  'explicit variant with other option',
  () => expect(
    themedProps(
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
*/