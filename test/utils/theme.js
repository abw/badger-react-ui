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

test(
  'no variant',
  () => expect(
    themedProps(
      { some: 'wibble', extra: 'cheese' },
      theme1
    )
  ).toEqual(
    { some: 'wibble', extra: 'cheese' }
  )
)

test(
  'invalid variant',
  () => expect(
    () => themedProps(
      { variant: 'wibble', extra: 'cheese' },
      theme1
    )
  ).toThrow('Invalid themedProps() value for variant: wibble')
)
