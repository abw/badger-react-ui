import { stylePropsClasses } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'
import { FlexType } from './types'

export const Flex: FlexType = ({
  children,
  ...props
}) =>
  <div className={stylePropsClasses(props, 'flex')}>
    {children}
  </div>

export default Themed(Flex, 'Flex')