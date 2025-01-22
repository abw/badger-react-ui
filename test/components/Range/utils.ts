import { test, expect } from 'vitest'
import { initRange } from '@/src/index'

test(
  'initRange() no props',
  () => {
    const range = initRange()
    expect(range.min).toBe(0)
    expect(range.max).toBe(100)
    expect(range.minValue).toBe(25)
    expect(range.maxValue).toBe(75)
    expect(range.step).toBe(1)
    expect(range.quantize(0.1)).toBe(0)
    expect(range.quantize(99.2)).toBe(99)
    expect(range.quantize(99.6)).toBe(100)
    expect(range.normalToValue(0)).toBe(0)
    expect(range.normalToValue(0.2)).toBe(20)
    expect(range.normalToValue(1.1)).toBe(100)
    expect(range.valueToNormal(50)).toBe(0.5)
    expect(range.valueToNormal(25)).toBe(0.25)
    expect(range.valueToNormal(-25)).toBe(0)
  }
)

test(
  'initRange() defaults',
  () => {
    const range = initRange({})
    expect(range.min).toBe(0)
    expect(range.max).toBe(100)
    expect(range.minValue).toBe(25)
    expect(range.maxValue).toBe(75)
    expect(range.step).toBe(1)
    expect(range.quantize(0.1)).toBe(0)
    expect(range.quantize(99.2)).toBe(99)
    expect(range.quantize(99.6)).toBe(100)
  }
)

test(
  'initRange() with min, max',
  () => {
    const range = initRange({ min: 100, max: 200 })
    expect(range.min).toBe(100)
    expect(range.max).toBe(200)
    expect(range.minValue).toBe(125)
    expect(range.maxValue).toBe(175)
    expect(range.step).toBe(1)
    expect(range.quantize(0.1)).toBe(100)
    expect(range.quantize(100)).toBe(100)
    expect(range.quantize(100.1)).toBe(100)
    expect(range.quantize(100.6)).toBe(101)
    expect(range.quantize(199.4)).toBe(199)
    expect(range.quantize(199.6)).toBe(200)
    expect(range.normalToValue(0)).toBe(100)
    expect(range.normalToValue(0.2)).toBe(120)
    expect(range.normalToValue(1.1)).toBe(200)
    expect(range.valueToNormal(100)).toBe(0)
    expect(range.valueToNormal(150)).toBe(0.5)
    expect(range.valueToNormal(151)).toBe(0.51)
    expect(range.valueToNormal(200)).toBe(1)
  }
)

test(
  'initRange() with min, max strings',
  () => {
    const range = initRange({ min: '100', max: '200' })
    expect(range.min).toBe(100)
    expect(range.max).toBe(200)
    expect(range.minValue).toBe(125)
    expect(range.maxValue).toBe(175)
    expect(range.step).toBe(1)
    expect(range.quantize(0.1)).toBe(100)
    expect(range.quantize(101.1)).toBe(101)
  }
)

test(
  'initRange() with min, max, value',
  () => {
    const range = initRange({ min: 100, max: 200, minValue: 110 })
    expect(range.min).toBe(100)
    expect(range.max).toBe(200)
    expect(range.minValue).toBe(110)
    expect(range.maxValue).toBe(175)
    expect(range.step).toBe(1)
  }
)

test(
  'initRange() with min, max, value outside range',
  () => {
    const range = initRange({ min: 100, max: 200, minValue: 99 })
    expect(range.min).toBe(100)
    expect(range.max).toBe(200)
    expect(range.minValue).toBe(100)
    expect(range.step).toBe(1)
  }
)

test(
  'initRange() with min, max, value out of step',
  () => {
    const range = initRange({ min: 100, max: 200, minValue: 101.2 })
    expect(range.min).toBe(100)
    expect(range.max).toBe(200)
    expect(range.minValue).toBe(101)
    expect(range.step).toBe(1)
    expect(range.quantize(0.1)).toBe(100)
    expect(range.quantize(101.55)).toBe(102)
    expect(range.normalToValue(0)).toBe(100)
    expect(range.normalToValue(0.212)).toBe(121)
    expect(range.normalToValue(99.99)).toBe(200)
  }
)

test(
  'initRange() with min and max as floats',
  () => {
    const range = initRange({ min: 1.1, max: 2.1, step: 0.1 })
    expect(range.min).toBe(1.1)
    expect(range.max).toBe(2.1)
    expect(range.minValue).toBe(1.4)
    expect(range.maxValue).toBe(1.9)
    expect(range.step).toBe(0.1)
    expect(range.quantize(1.14)).toBe(1.1)
    expect(range.normalToValue(0)).toBe(1.1)
    expect(range.normalToValue(0.111)).toBe(1.2)
  }
)

test(
  'initRange() with explicit step 0.1',
  () => {
    const range = initRange({ min: 1, max: 2, step: 0.1 })
    expect(range.min).toBe(1)
    expect(range.max).toBe(2)
    expect(range.minValue).toBe(1.3)
    expect(range.step).toBe(0.1)
  }
)

test(
  'initRange() with explicit step 0.2 as string',
  () => {
    const range = initRange({ min: 1, max: 2, step: '0.2' })
    expect(range.min).toBe(1)
    expect(range.max).toBe(2)
    expect(range.minValue).toBe(1.2)   // closest step to 1.25
    expect(range.step).toBe(0.2)
    expect(range.quantize(0.1)).toBe(1)
    expect(range.quantize(1.09)).toBe(1)
    expect(range.quantize(1.1)).toBe(1.2)
    expect(range.quantize(1.89)).toBe(1.8)
    expect(range.quantize(1.91)).toBe(2)
  }
)

test(
  'initRange() with any step',
  () => {
    const range = initRange({ min: 1, max: 2, step: 'any' })
    expect(range.min).toBe(1)
    expect(range.max).toBe(2)
    expect(range.minValue).toBe(1.25)
    expect(range.maxValue).toBe(1.75)
    expect(range.step).toBe('any')
    expect(range.quantize(0.1)).toBe(1)
    expect(range.quantize(1.1)).toBe(1.1)
    expect(range.quantize(1.15)).toBe(1.15)
  }
)

test(
  'initRange() with explicit null step',
  () => {
    const range = initRange({ min: 1, max: 2, step: undefined })
    expect(range.min).toBe(1)
    expect(range.max).toBe(2)
    expect(range.minValue).toBe(1.25)
    expect(range.maxValue).toBe(1.75)
    expect(range.step).toBe('any')
    expect(range.quantize(0.1)).toBe(1)
    expect(range.quantize(1.1)).toBe(1.1)
    expect(range.quantize(1.15)).toBe(1.15)
    expect(range.quantize(1.95)).toBe(1.95)
    expect(range.quantize(2.01)).toBe(2)
  }
)
