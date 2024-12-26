import { test, expect } from 'vitest'
import { validOption, optionValue, findOption, searchOptions } from '@/src/index.jsx'

//-- validOption -------------------------------------------------------------
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

//-- optionValue -------------------------------------------------------------
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

//-- findOption --------------------------------------------------------------
test(
  'findOption() for undefined',
  () => expect(
    findOption(
      [ 'foo', 'bar', 'baz' ]
    )
  ).toStrictEqual(
    [ ]
  )
)

test(
  'findOption() for null',
  () => expect(
    findOption(
      [ 'foo', 'bar', 'baz' ],
      null
    )
  ).toStrictEqual(
    [ ]
  )
)

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
  'findOption() for missing string',
  () => expect(
    findOption(
      [ 'foo', 'bar', 'baz' ],
      'wibble'
    )
  ).toStrictEqual(
    [ ]
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

//-- searchOptions -----------------------------------------------------------
test(
  'searchOptions() strings',
  () => expect(
    searchOptions(
      'an',
      [
        'Alan',
        'Mandy',
        'Robert'
      ]
    )
  ).toStrictEqual(
    ['Alan', 'Mandy']
  )
)

test(
  'searchOptions() strings with case folding',
  () => expect(
    searchOptions(
      'AL',
      [
        'Alan',
        'Mandy',
        'Robert',
        'Callum'
      ]
    )
  ).toStrictEqual(
    ['Alan', 'Callum']
  )
)

test(
  'searchOptions() objects name',
  () => expect(
    searchOptions(
      'An',
      [
        { id: 1, name: 'Alan' },
        { id: 2, name: 'Mandy' },
        { id: 3, name: 'Robert' },
        { id: 4, name: 'Callum' }
      ]
    )
  ).toStrictEqual(
    [
      { id: 1, name: 'Alan'   },
      { id: 2, name: 'Mandy' },
    ]
  )
)

test(
  'searchOptions() objects value',
  () => expect(
    searchOptions(
      'An',
      [
        { id: 1, value: 'Alan' },
        { id: 2, value: 'Mandy' },
        { id: 3, value: 'Robert' },
        { id: 4, value: 'Callum' }
      ]
    )
  ).toStrictEqual(
    [
      { id: 1, value: 'Alan'   },
      { id: 2, value: 'Mandy' },
    ]
  )
)

test(
  'searchOptions() objects with fixed value',
  () => expect(
    searchOptions(
      'An',
      [
        { id: 0, value: 'ADD ONE', fixed: true },
        { id: 1, value: 'Alan' },
        { id: 2, value: 'Mandy' },
        { id: 3, value: 'Robert' },
        { id: 4, value: 'Callum' }
      ]
    )
  ).toStrictEqual(
    [
      { id: 0, value: 'ADD ONE', fixed: true },
      { id: 1, value: 'Alan'   },
      { id: 2, value: 'Mandy' },
    ]
  )
)

test(
  'searchOptions() objects with nothing to match',
  () => expect(
    searchOptions(
      'An',
      [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ]
    )
  ).toStrictEqual(
    [
    ]
  )
)
