import { test, expect } from 'vitest'
import { cursorFirst, cursorLast, cursorNext, cursorPrev } from '@/src/index'

//--------------------------------------------------------------------------
// cursorFirst()
//--------------------------------------------------------------------------
test(
  'cursorFirst() returns 0',
  () => expect(
    cursorFirst([10, 20, 30])
  ).toBe(
    0
  )
)

test(
  'cursorFirst() skips disabled option',
  () => expect(
    cursorFirst([{ disabled: true }, 20, 30])
  ).toBe(
    1
  )
)

test(
  'cursorFirst() skips separator',
  () => expect(
    cursorFirst([{ separator: true }, 20, 30])
  ).toBe(
    1
  )
)

test(
  'cursorFirst() no valid options',
  () => expect(
    cursorFirst([{ separator: true }, { disabled: true }])
  ).toBe(
    null
  )
)

//--------------------------------------------------------------------------
// cursorLast()
//--------------------------------------------------------------------------
test(
  'cursorLast() returns 2',
  () => expect(
    cursorLast([10, 20, 30])
  ).toBe(
    2
  )
)

test(
  'cursorLast() skips disabled option',
  () => expect(
    cursorLast([10, 20, { disabled: true }])
  ).toBe(
    1
  )
)

test(
  'cursorLast() skips separator',
  () => expect(
    cursorLast([10, 20, { separator: true }])
  ).toBe(
    1
  )
)

test(
  'cursorLast() no valid options',
  () => expect(
    cursorLast([{ separator: true }, { disabled: true }])
  ).toBe(
    null
  )
)

//--------------------------------------------------------------------------
// cursorNext()
//--------------------------------------------------------------------------
test(
  'cursorNext() after 0',
  () => expect(
    cursorNext([10, 20, 30], 0)
  ).toBe(
    1
  )
)
test(
  'cursorNext() after 1',
  () => expect(
    cursorNext([10, 20, 30], 1)
  ).toBe(
    2
  )
)
test(
  'cursorNext() after 2',
  () => expect(
    cursorNext([10, 20, 30], 2)
  ).toBe(
    0
  )
)

test(
  'cursorNext() skips disabled option',
  () => expect(
    cursorNext([10, { disabled: true }, 30], 0)
  ).toBe(
    2
  )
)

test(
  'cursorNext() skips separator',
  () => expect(
    cursorNext([10, 20, { separator: true }], 1)
  ).toBe(
    0
  )
)

test(
  'cursorNext() no valid options',
  () => expect(
    cursorNext([{ separator: true }, { disabled: true }], 0)
  ).toBe(
    null
  )
)

//--------------------------------------------------------------------------
// cursorPrev()
//--------------------------------------------------------------------------
test(
  'cursorPrev() before 0',
  () => expect(
    cursorPrev([10, 20, 30], 0)
  ).toBe(
    2
  )
)
test(
  'cursorPrev() before 1',
  () => expect(
    cursorPrev([10, 20, 30], 1)
  ).toBe(
    0
  )
)
test(
  'cursorPrev() before 2',
  () => expect(
    cursorPrev([10, 20, 30], 2)
  ).toBe(
    1
  )
)

test(
  'cursorPrev() skips disabled option',
  () => expect(
    cursorPrev([10, { disabled: true }, 30], 2)
  ).toBe(
    0
  )
)

test(
  'cursorPrev() skips separator',
  () => expect(
    cursorPrev([10, 20, { separator: true }], 0)
  ).toBe(
    1
  )
)

test(
  'cursorPrev() no valid options',
  () => expect(
    cursorPrev([{ separator: true }, { disabled: true }], 0)
  ).toBe(
    null
  )
)
