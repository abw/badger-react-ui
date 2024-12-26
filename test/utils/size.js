import { expect, test } from 'vitest'
import { parseSize } from '@/src/index.jsx'

test(
  'parseSize(11)',
  () => expect( parseSize('11') ).toEqual(11)
)

test(
  'parseSize("11")',
  () => expect( parseSize('11') ).toEqual(11)
)

test(
  'parseSize("11px")',
  () => expect( parseSize('11px') ).toEqual(11)
)

test(
  'parseSize("3rem")',
  () => expect( parseSize('3rem') ).toEqual(48)
)

test(
  'parseSize("widescreen")',
  () => expect( parseSize('widescreen') ).toEqual(1440)
)

test(
  'parseSize("desktop")',
  () => expect( parseSize('desktop') ).toEqual(1200)
)

test(
  'parseSize("laptop")',
  () => expect( parseSize('laptop') ).toEqual(960)
)

test(
  'parseSize("tablet")',
  () => expect( parseSize('tablet') ).toEqual(720)
)

test(
  'parseSize("mobile")',
  () => expect( parseSize('mobile') ).toEqual(480)
)

test(
  'parseSize("one louder")',
  () => expect( () => parseSize('one louder') )
    .toThrowError('Invalid size specified: one louder')
)

