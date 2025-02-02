import { BadgeSuffixProps } from './types'

export const BadgeSuffix = ({
  suffix,
  suffixClass='suffix'
}: BadgeSuffixProps) =>
  <div className={suffixClass}>{suffix}</div>

export default BadgeSuffix
