import { BadgePrefixType } from './types'

export const BadgePrefix: BadgePrefixType = ({
  prefix,
  prefixClass='prefix'
}) =>
  <div className={prefixClass}>{prefix}</div>

export default BadgePrefix
