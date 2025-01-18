import { isSimple } from '@abw/badger-utils'
import { SearchResult } from './types'

export const resultKey = (
  result: SearchResult,
  n: number
): string => {
  if (isSimple(result)) {
    return String(result)
  }
  return String(
    result?.id ?? result?.value ?? n
  )
}
