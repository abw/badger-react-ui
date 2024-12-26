import { expect, test } from 'vitest'
import { scrollParentChild } from '@/src/index.jsx'

test(
  'scroll child less than parent',
  () => {
    let value
    const scrollTo = args => value = args
    const parent = { scrollTop: 10, offsetHeight: 50, scrollTo }
    const child  = { offsetTop: 9,  offsetHeight: 50 }
    scrollParentChild(parent, child)
    expect(value).toStrictEqual({ top: child.offsetTop })
  }
)

test(
  'scroll child greater than parent',
  () => {
    let value
    const scrollTo = args => value = args
    const parent = { scrollTop: 10,  offsetHeight: 30, scrollTo }
    const child  = { offsetTop: 11,  offsetHeight: 40 }
    scrollParentChild(parent, child)
    expect(value).toStrictEqual({
      top: 21, // 10 + (51 - 40)
    })
  }
)

test(
  'scroll no parent',
  () => {
    expect(scrollParentChild(null)).toBeUndefined()
  }
)

test(
  'scroll no child',
  () => {
    expect(scrollParentChild('blah', null)).toBeUndefined()
  }
)