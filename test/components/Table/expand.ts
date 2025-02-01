import { test, expect } from 'vitest'
import { expandTableColumns } from '@/src/index'

const rows = [
  { foo: 'foo-10', bar: 'bar-20', baz: 'baz-30' },
  { foo: 'foo-11', bar: 'bar-21', baz: 'baz-31' },
  { foo: 'foo-12', bar: 'bar-22', baz: 'baz-32' },
]

test(
  `expandTableColumns('foo bar')`,
  () => {
    const [head, body] = expandTableColumns('foo bar', rows)
    expect(head).toStrictEqual({
      rows: [
        [
          { text: 'Foo' },    // TODO: capitalise to Foo
          { text: 'Bar' },    // TODO: capitalise to Bar
        ]
      ]
    })
    expect(body).toStrictEqual({
      rows: [
        [
          { text: 'foo-10' },
          { text: 'bar-20' },
        ],
        [
          { text: 'foo-11' },
          { text: 'bar-21' },
        ],
        [
          { text: 'foo-12' },
          { text: 'bar-22' },
        ],
      ]
    })
  }
)

test(
  `expandTableColumns(['foo', 'bar'])`,
  () => {
    const [head, body] = expandTableColumns(['foo', 'bar'], rows)
    expect(head).toStrictEqual({
      rows: [
        [
          { text: 'foo' },
          { text: 'bar' },
        ]
      ]
    })
    expect(body).toStrictEqual({
      rows: [
        [
          { text: 'foo-10' },
          { text: 'bar-20' },
        ],
        [
          { text: 'foo-11' },
          { text: 'bar-21' },
        ],
        [
          { text: 'foo-12' },
          { text: 'bar-22' },
        ],
      ]
    })
  }
)

test(
  `expandTableColumns({ ... })`,
  () => {
    const [head, body] = expandTableColumns(
      {
        foo: { },
        bar: {
          head: 'Bar',
          body: ({ row }) => `bar is ${row.bar}`
        },
        baz: {
          head: { text: 'Baz', className: 'text-right' },
          body: {
            className: 'text-right',
            text: ({ row }) => `baz is ${row.baz}`
          }
        }
      },
      rows
    )
    expect(head).toStrictEqual({
      rows: [
        [
          { text: 'foo' },
          { text: 'Bar' },
          { text: 'Baz', className: 'text-right' },
        ]
      ]
    })
    expect(body).toStrictEqual({
      rows: [
        [
          { text: 'foo-10' },
          { text: 'bar is bar-20' },
          { text: 'baz is baz-30', className: 'text-right' },
        ],
        [
          { text: 'foo-11' },
          { text: 'bar is bar-21' },
          { text: 'baz is baz-31', className: 'text-right' },
        ],
        [
          { text: 'foo-12' },
          { text: 'bar is bar-22' },
          { text: 'baz is baz-32', className: 'text-right' },
        ],
      ]
    })
  }
)