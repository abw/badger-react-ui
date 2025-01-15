import { Icons as BadgerIcons } from '@abw/badger-icon'
import { sizeColorProps } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'
import { IconsProps } from './types'

export default Themed<IconsProps>(
  ({ names, ...props }) =>
    <BadgerIcons
      names={names}
      {...sizeColorProps(props)}
    />,
  'Icons'
)

// export default Themed(Icons, 'Icons')