import { test, expect } from 'vitest'
import { validOption, optionValue, findOption } from '@/src/index.jsx'

//--------------------------------------------------------------------------
// validOption
//--------------------------------------------------------------------------

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

//--------------------------------------------------------------------------
// findOption
//--------------------------------------------------------------------------
test(
  'findOption() for string',
  () => expect(
    findOption(
      [ 'foo', 'bar', 'baz' ],
      'foo'
    )
  ).toStrictEqual(
    ['foo', 0]
  )
)
test(
  'findOption() for another string',
  () => expect(
    findOption(
      [ 'foo', 'bar', 'baz' ],
      'bar'
    )
  ).toStrictEqual(
    ['bar', 1]
  )
)
test(
  'findOption() for a number',
  () => expect(
    findOption(
      [ 10, 20, 30 ],
      30
    )
  ).toStrictEqual(
    [30, 2]
  )
)
test(
  'findOption() for an object by value',
  () => expect(
    findOption(
      [
        { value: 10, name: 'ten'    },
        { value: 20, name: 'twenty' },
        { value: 30, name: 'thirty' },
      ],
      20
    )
  ).toStrictEqual(
    [{ value: 20, name: 'twenty' }, 1]
  )
)
test(
  'findOption() for an object by id string',
  () => expect(
    findOption(
      [
        { id: 'ten',    name: 'Dix'    },
        { id: 'twenty', name: 'Vingt'  },
        { id: 'thirty', name: 'Trente' },
      ],
      'thirty'
    )
  ).toStrictEqual(
    [{ id: 'thirty', name: 'Trente' }, 2]
  )
)
