import { BadgeSuffixType } from './types'

export const BadgeSuffix: BadgeSuffixType = ({
  suffix,
  suffixClass='suffix'
}) =>
  <div className={suffixClass}>{suffix}</div>

export default BadgeSuffix
