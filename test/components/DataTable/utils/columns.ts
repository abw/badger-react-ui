import { test, expect } from 'vitest'
import { dataTableColumnDefinition, dataTableColumnDefinitions, dataTableColumnOrder, dataTableSortColumn, dataTableVisibleColumns } from '@/src/components'

test(
  'column from string',
  () => expect(
    dataTableColumnDefinition('foo')
  ).toStrictEqual({
    field: 'foo',
    type: 'text',
    heading: 'Foo',
    id: 'foo',
    sortable: true,
    filterable: true,
  })
)

test(
  'column from object with only field',
  () => {
    expect(
      dataTableColumnDefinition({
        field: 'bar'
      })
    ).toStrictEqual({
      field: 'bar',
      type: 'text',
      heading: 'Bar',
      id: 'bar',
      sortable: true,
      filterable: true,
    })
  }
)

test(
  'column from object with type',
  () => expect(
    dataTableColumnDefinition({
      field: 'baz',
      type: 'number'
    })
  ).toStrictEqual({
    field: 'baz',
    type: 'number',
    heading: 'Baz',
    id: 'baz',
    sortable: true,
    filterable: true,
  })
)

test(
  'column from object with heading',
  () => expect(
    dataTableColumnDefinition({
      field: 'moi',
      heading: 'Le Moi'
    })
  ).toStrictEqual({
    field: 'moi',
    type: 'text',
    heading: 'Le Moi',
    id: 'moi',
    sortable: true,
    filterable: true,
  })
)

test(
  'column from object with label',
  () => expect(
    dataTableColumnDefinition({
      field: 'moi',
      label: 'Le Moi'
    })
  ).toStrictEqual({
    field: 'moi',
    type: 'text',
    heading: 'Le Moi',
    id: 'moi',
    sortable: true,
    filterable: true,
  })
)

test(
  'column from object with sortable and filterable disabled',
  () => expect(
    dataTableColumnDefinition({
      field: 'nope',
      filterable: false,
      sortable: false
    })
  ).toStrictEqual({
    field: 'nope',
    type: 'text',
    heading: 'Nope',
    id: 'nope',
    sortable: false,
    filterable: false,
  })
)

test(
  'column from object with align',
  () => expect(
    dataTableColumnDefinition({
      field: 'lefty',
      align: 'left'
    })
  ).toStrictEqual({
    field: 'lefty',
    type: 'text',
    heading: 'Lefty',
    id: 'lefty',
    sortable: true,
    filterable: true,
    align: 'left'
  })
)

test(
  'column from object with other keys',
  () => expect(
    dataTableColumnDefinition({
      field: 'more',
      hidden: true,
      extra: 'cheese'
    })
  ).toStrictEqual({
    field: 'more',
    type: 'text',
    heading: 'More',
    id: 'more',
    sortable: true,
    filterable: true,
    hidden: true,
    extra: 'cheese'
  })
)

test(
  'column with visible false',
  () => expect(
    dataTableColumnDefinition({
      field: 'dark',
      visible: false,
    })
  ).toStrictEqual({
    field: 'dark',
    type: 'text',
    heading: 'Dark',
    id: 'dark',
    sortable: true,
    filterable: true,
    hidden: true,
    visible: false      // Note that visible is passed through
  })
)

test(
  'columns from string',
  () => expect(
    dataTableColumnDefinitions('foo bar baz')
  ).toStrictEqual({
    foo: {
      field: 'foo',
      type: 'text',
      heading: 'Foo',
      id: 'foo',
      sortable: true,
      filterable: true,
    },
    bar: {
      field: 'bar',
      type: 'text',
      heading: 'Bar',
      id: 'bar',
      sortable: true,
      filterable: true,
    },
    baz: {
      field: 'baz',
      type: 'text',
      heading: 'Baz',
      id: 'baz',
      sortable: true,
      filterable: true,
    }
  })
)

test(
  'columns from array of strings',
  () => expect(
    dataTableColumnDefinitions(['foo', 'bar', 'baz'])
  ).toStrictEqual({
    foo: {
      field: 'foo',
      type: 'text',
      heading: 'Foo',
      id: 'foo',
      sortable: true,
      filterable: true,
    },
    bar: {
      field: 'bar',
      type: 'text',
      heading: 'Bar',
      id: 'bar',
      sortable: true,
      filterable: true,
    },
    baz: {
      field: 'baz',
      type: 'text',
      heading: 'Baz',
      id: 'baz',
      sortable: true,
      filterable: true,
    }
  })
)

test(
  'columns from array of objects',
  () => expect(
    dataTableColumnDefinitions([
      { field: 'foo' },
      { field: 'bar', heading: 'Pub' },
      { field: 'baz', sortable: false }
    ])
  ).toStrictEqual({
    foo: {
      field: 'foo',
      type: 'text',
      heading: 'Foo',
      id: 'foo',
      sortable: true,
      filterable: true,
    },
    bar: {
      field: 'bar',
      type: 'text',
      heading: 'Pub',
      id: 'bar',
      sortable: true,
      filterable: true,
    },
    baz: {
      field: 'baz',
      type: 'text',
      heading: 'Baz',
      id: 'baz',
      sortable: false,
      filterable: true,
    }
  })
)

test(
  'columns from mixed array of objects and strings',
  () => expect(
    dataTableColumnDefinitions([
      'foo',
      { field: 'bar', heading: 'Pub' },
      { field: 'baz', sortable: false }
    ])
  ).toStrictEqual({
    foo: {
      field: 'foo',
      type: 'text',
      heading: 'Foo',
      id: 'foo',
      sortable: true,
      filterable: true,
    },
    bar: {
      field: 'bar',
      type: 'text',
      heading: 'Pub',
      id: 'bar',
      sortable: true,
      filterable: true,
    },
    baz: {
      field: 'baz',
      type: 'text',
      heading: 'Baz',
      id: 'baz',
      sortable: false,
      filterable: true,
    }
  })
)

test(
  'columns from object',
  () => expect(
    dataTableColumnDefinitions({
      foo: true,
      bar: { heading: 'Pub' },
      baz: { sortable: false },
      bam: false
    })
  ).toStrictEqual({
    foo: {
      field: 'foo',
      type: 'text',
      heading: 'Foo',
      id: 'foo',
      sortable: true,
      filterable: true,
    },
    bar: {
      field: 'bar',
      type: 'text',
      heading: 'Pub',
      id: 'bar',
      sortable: true,
      filterable: true,
    },
    baz: {
      field: 'baz',
      type: 'text',
      heading: 'Baz',
      id: 'baz',
      sortable: false,
      filterable: true,
    }
  })
)

test(
  'visible columns no saved',
  () => expect(
    dataTableVisibleColumns(
      dataTableColumnDefinitions('foo bar baz')
    )
  ).toStrictEqual(['foo', 'bar', 'baz'])
)

test(
  'visible columns all present',
  () => expect(
    dataTableVisibleColumns(
      dataTableColumnDefinitions('foo bar baz'),
      ['foo', 'bar', 'baz']
    )
  ).toStrictEqual(['foo', 'bar', 'baz'])
)

test(
  'visible columns some missing',
  () => expect(
    dataTableVisibleColumns(
      dataTableColumnDefinitions('foo baz'),
      ['foo', 'bar', 'baz']
    )
  ).toStrictEqual(['foo', 'baz'])
)

test(
  'visible columns some now hidden',
  () => expect(
    dataTableVisibleColumns(
      dataTableColumnDefinitions({
        foo: true,
        bar: { hidden: true },
        baz: true
      }),
      ['foo', 'bar', 'baz']
    )
  ).toStrictEqual(['foo', 'baz'])
)

test(
  'visible columns some now not visible',
  () => expect(
    dataTableVisibleColumns(
      dataTableColumnDefinitions({
        foo: true,
        bar: { visible: false },
        baz: true
      }),
      ['foo', 'bar', 'baz']
    )
  ).toStrictEqual(['foo', 'baz'])
)

test(
  'all non-hidden columns',
  () => expect(
    dataTableVisibleColumns(
      dataTableColumnDefinitions({
        foo: true,
        bar: { hidden: true },
        baz: true
      }),
      [ ]
    )
  ).toStrictEqual(['foo', 'baz'])
)

test(
  'all visible columns',
  () => expect(
    dataTableVisibleColumns(
      dataTableColumnDefinitions({
        foo: true,
        bar: { visible: false },
        baz: true,
        bam: false
      }),
      [ ]
    )
  ).toStrictEqual(['foo', 'baz'])
)

test(
  'column order no saved',
  () => expect(
    dataTableColumnOrder(
      dataTableColumnDefinitions('foo bar baz')
    )
  ).toStrictEqual(['foo', 'bar', 'baz'])
)

test(
  'column order different order',
  () => expect(
    dataTableColumnOrder(
      dataTableColumnDefinitions('foo bar baz'),
      ['baz', 'bar', 'foo']
    )
  ).toStrictEqual(['baz', 'bar', 'foo'])
)

test(
  'column order missing columns',
  () => expect(
    dataTableColumnOrder(
      dataTableColumnDefinitions('foo bar baz'),
      ['foo', 'nope', 'bar', 'nada', 'baz']
    )
  ).toStrictEqual(['foo', 'bar', 'baz'])
)

test(
  'column order no longer visible columns',
  () => expect(
    dataTableColumnOrder(
      dataTableColumnDefinitions({
        foo: true,
        nope: { hidden: true },
        bar: true,
        nada: { visible: false },
        baz: true,
      }),
      ['foo', 'nope', 'bar', 'nada', 'baz']
    )
  ).toStrictEqual(['foo', 'bar', 'baz'])
)

test(
  'column order adds visible columns',
  () => expect(
    dataTableColumnOrder(
      dataTableColumnDefinitions({
        foo: true,
        nope: { hidden: true },
        bar: true,
        nada: { visible: false },
        baz: true,
        more: true,
        none: { hidden: true }
      }),
      ['foo', 'nope', 'bar', 'nada', 'baz']
    )
  ).toStrictEqual(['foo', 'bar', 'baz', 'more'])
)

test(
  'column order defaults to visible columns',
  () => expect(
    dataTableColumnOrder(
      dataTableColumnDefinitions({
        foo: true,
        nope: { hidden: true },
        bar: true,
        nada: { visible: false },
        baz: true,
        more: true,
        none: { hidden: true }
      })
    )
  ).toStrictEqual(['foo', 'bar', 'baz', 'more'])
)

test(
  'sort column no value',
  () => expect(
    dataTableSortColumn(
      dataTableColumnDefinitions('foo bar'),
    )
  ).toStrictEqual([ undefined, false ])
)

test(
  'sort column current value',
  () => expect(
    dataTableSortColumn(
      dataTableColumnDefinitions('foo bar'),
      'foo'
    )
  ).toStrictEqual([ 'foo', false ])
)

test(
  'sort column current value reversed',
  () => expect(
    dataTableSortColumn(
      dataTableColumnDefinitions('foo bar'),
      'foo', true
    )
  ).toStrictEqual([ 'foo', true ])
)

test(
  'sort column now missing',
  () => expect(
    dataTableSortColumn(
      dataTableColumnDefinitions('foo bar'),
      'bam', true
    )
  ).toStrictEqual([ undefined, false ])
)

test(
  'sort column now hidden',
  () => expect(
    dataTableSortColumn(
      dataTableColumnDefinitions({
        foo: true,
        bar: { hidden: true }
      }),
      'bar', true
    )
  ).toStrictEqual([ undefined, false ])
)
