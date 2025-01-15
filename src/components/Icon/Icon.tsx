import { Icon as BadgerIcon } from '@abw/badger-icon'
import { sizeColorProps } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'
import { IconProps } from './types'

export default Themed<IconProps>(
  (props) =>
    <BadgerIcon
      {...sizeColorProps(props)}
    />,
  'Icon'
)
