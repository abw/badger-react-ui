import { expect, test } from 'vitest'
import { capitalFirstLetter } from '@/src/utils/index'

test(
  'capitalFirstLetter("wibble")',
  () => expect(
    capitalFirstLetter('wibble')
  ).toEqual(
    'Wibble'
  )
)

test(
  'capitalFirstLetter("wibble frusset pouch")',
  () => expect(
    capitalFirstLetter('wibble frusset pouch')
  ).toEqual(
    'Wibble frusset pouch'
  )
)
