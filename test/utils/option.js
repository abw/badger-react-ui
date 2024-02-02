import { test, expect } from 'vitest'
import { validOption, optionValue } from '@/src/index.jsx'

test(
  'validOption() is true for string',
  () => expect(
    validOption('foo')
  ).toBe(
    true
  )
)

test(
  'validOption() is true for number',
  () => expect(
    validOption(23)
  ).toBe(
    true
  )
)

test(
  'validOption() is true for boolean',
  () => expect(
    validOption(false)
  ).toBe(
    true
  )
)

test(
  'validOption() is true for object',
  () => expect(
    validOption({ name: 'example' })
  ).toBe(
    true
  )
)

test(
  'validOption() is false for separator',
  () => expect(
    validOption({ separator: true })
  ).toBe(
    false
  )
)

test(
  'validOption() is false for disabled option',
  () => expect(
    validOption({ disabled: true })
  ).toBe(
    false
  )
)

//--------------------------------------------------------------------------
// optionValue
//--------------------------------------------------------------------------
test(
  'optionValue() returns string',
  () => expect(
    optionValue('foo')
  ).toBe(
    'foo'
  )
)

test(
  'optionValue() returns number',
  () => expect(
    optionValue(99)
  ).toBe(
    99
  )
)

test(
  'optionValue() returns boolean',
  () => expect(
    optionValue(false)
  ).toBe(
    false
  )
)

test(
  'optionValue() returns object.value',
  () => expect(
    optionValue({ value: 99 })
  ).toBe(
    99
  )
)

test(
  'optionValue() returns object.value when zero',
  () => expect(
    optionValue({ value: 0 })
  ).toBe(
    0
  )
)

test(
  'optionValue() returns object.value when false',
  () => expect(
    optionValue({ value: false })
  ).toBe(
    false
  )
)

test(
  'optionValue() returns object.id',
  () => expect(
    optionValue({ id: 100 })
  ).toBe(
    100
  )
)

test(
  'optionValue() returns object.id when zero',
  () => expect(
    optionValue({ id: 0 })
  ).toBe(
    0
  )
)

test(
  'optionValue() returns object.id when false',
  () => expect(
    optionValue({ id: false })
  ).toBe(
    false
  )
)
