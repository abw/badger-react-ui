import { test, expect } from 'vitest'
import { extractStyleProps } from '@/src/utils/index'

test(
  'propOne',
  () => expect(
    extractStyleProps(
      {
        propOne: '--prop-one',
        propTwo: 'numberTwo'
      },
      {
        propOne: 'one'
      },
    )
  ).toEqual({
    '--prop-one': 'one'
  })
)

test(
  'propOne and propTwo',
  () => expect(
    extractStyleProps(
      {
        propOne: '--prop-one',
        propTwo: 'numberTwo'
      },
      {
        propOne: 'one',
        propTwo: 'two'
      },
    )
  ).toEqual({
    '--prop-one': 'one',
    numberTwo: 'two'
  })
)

test(
  'propOne, propTwo and style',
  () => expect(
    extractStyleProps(
      {
        propOne: '--prop-one',
        propTwo: 'numberTwo',
      },
      {
        propOne: 'one',
        propTwo: 'two',
        style: {
          foo: 'bar'
        }
      },
    )
  ).toEqual({
    '--prop-one': 'one',
    numberTwo: 'two',
    foo: 'bar'
  })
)

test(
  'propOne, propTwo, style and more',
  () => expect(
    extractStyleProps(
      {
        propOne: '--prop-one',
        propTwo: 'numberTwo',
      },
      {
        propOne: 'one',
        propTwo: 'two',
        style: {
          foo: 'bar'
        }
      },
      {
        minWibble: 1,
        maxWibble: 11
      }
    )
  ).toEqual({
    '--prop-one': 'one',
    numberTwo: 'two',
    foo: 'bar',
    minWibble: 1,
    maxWibble: 11
  })
)

test(
  'propOne and propTwo is null',
  () => expect(
    extractStyleProps(
      {
        propOne: '--prop-one',
        propTwo: 'numberTwo'
      },
      {
        propOne: 'one',
        propTwo: null
      },
    )
  ).toEqual({
    '--prop-one': 'one',
  })
)
