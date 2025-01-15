import { BadgeSuffixType } from './types'

const Suffix: BadgeSuffixType = ({
  suffix,
  suffixClass='suffix'
}) =>
  <div className={suffixClass}>{suffix}</div>

export default Suffix
