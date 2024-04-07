import { expect, test } from 'vitest'
import { Storage } from '@/src/index.jsx'

const store = Storage('test')
store.delete('foo')

test(
  'get() foo is null nothing',
  () => expect(
    store.get('foo')
  ).toEqual(
    null
  )
)

test(
  'get() foo with default',
  () => expect(
    store.get('foo', 'bar')
  ).toEqual(
    'bar'
  )
)

test(
  'get() foo should be set',
  () => expect(
    store.get('foo')
  ).toEqual(
    'bar'
  )
)

test(
  'set() foo to new value',
  () => {
    store.set('foo', 'baz')
    expect(
      store.get('foo')
    ).toEqual(
      'baz'
    )
  }
)

test(
  'set() wiz with data',
  () => {
    store.set('wiz', { bang: 'flash', wam: null })
    const wiz = store.get('wiz')
    expect(
      wiz.bang
    ).toEqual(
      'flash'
    )
    expect(
      wiz.wam
    ).toEqual(
      null
    )
  }
)
