import { BadgePrefixType } from './types'

const Prefix: BadgePrefixType = ({
  prefix,
  prefixClass='prefix'
}) =>
  <div className={prefixClass}>{prefix}</div>

export default Prefix
