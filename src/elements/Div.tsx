import { stylePropsClasses } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'
import { DivType } from './types'

export const Div: DivType = ({
  style,
  content,
  children,
  ...props
}) =>
  <div className={stylePropsClasses(props)} style={style}>
    {content||children}
  </div>

export default Themed(Div, 'Div')