import { test, expect } from 'vitest'
import { valueRounder } from '@/src/index.jsx'
import { valuePercent } from '@/src/index.jsx'

test(
  'valueRounder(false) does no rounding',
  () => {
    const rounder = valueRounder(false)
    expect(rounder(1.23)).toBe(1.23)
    expect(rounder(11)).toBe(11)
  }
)

test(
  'valueRounder(true) rounds to the nearest integer',
  () => {
    const rounder = valueRounder(true)
    expect(rounder(1.23)).toBe(1)
    expect(rounder(1.56)).toBe(2)
    expect(rounder(11)).toBe(11)
  }
)

test(
  'valueRounder(0) rounds to the nearest integer',
  () => {
    const rounder = valueRounder(0)
    expect(rounder(1.23)).toBe(1)
    expect(rounder(1.56)).toBe(2)
    expect(rounder(11)).toBe(11)
  }
)

test(
  'valueRounder(-1) rounds to the nearest 10',
  () => {
    const rounder = valueRounder(-1)
    expect(rounder(1.23)).toBe(0)
    expect(rounder(5.6)).toBe(10)
    expect(rounder(13)).toBe(10)
    expect(rounder(13.5)).toBe(10)
    expect(rounder(48)).toBe(50)
    expect(rounder(-4)).toBe(-0)
    expect(rounder(-8)).toBe(-10)
  }
)

test(
  'valueRounder(-2) rounds to the nearest 100',
  () => {
    const rounder = valueRounder(-2)
    expect(rounder(1.23)).toBe(0)
    expect(rounder(5.6)).toBe(0)
    expect(rounder(13)).toBe(0)
    expect(rounder(51)).toBe(100)
    expect(rounder(99)).toBe(100)
  }
)

test(
  'valueRounder(1) rounds to the nearest 0.1',
  () => {
    const rounder = valueRounder(1)
    expect(rounder(1.23)).toBe(1.2)
    expect(rounder(1.5678)).toBe(1.6)
    expect(rounder(123.456)).toBe(123.5)
    expect(rounder(1234.5678)).toBe(1234.6)
  }
)

test(
  'valueRounder(2) rounds to the nearest 0.01',
  () => {
    const rounder = valueRounder(2)
    expect(rounder(1.234)).toBe(1.23)
    expect(rounder(1.235)).toBe(1.24)
    expect(rounder(1.5678)).toBe(1.57)
    expect(rounder(123.456)).toBe(123.46)
    expect(rounder(1234.5678)).toBe(1234.57)
  }
)

test(
  'valueRounder(fn) delegates to fn',
  () => {
    const rounder = valueRounder(() => 11)
    expect(rounder(1.23)).toBe(11)
    expect(rounder(10)).toBe(11)
    expect(rounder(12)).toBe(11)
    expect(rounder(12)).toBe(11)
  }
)

test(
  'valuePercent',
  () => {
    expect(valuePercent(35, 20, 40)).toBe(75)
    expect(valuePercent(28, 20, 40)).toBe(40)
    expect(valuePercent(38, 20, 40)).toBe(90)
  }
)
