import { BadgePrefixProps } from './types'

export const BadgePrefix = ({
  prefix,
  prefixClass='prefix'
}: BadgePrefixProps) =>
  <div className={prefixClass}>{prefix}</div>

export default BadgePrefix
