import Context from './Context'
import RangeContent from './Content'
import { RangeContentProps, RangeProps } from './types'
import { Themed } from '@/src/Theme'

type RangeComponentProps = RangeProps & Partial<RangeContentProps> & {
  Content?: typeof RangeContent
}

const Range = ({
  Content=RangeContent,
  children,
  ...props
}: RangeComponentProps) =>
  <Context.Provider {...props}>
    <Content>
      {children}
    </Content>
  </Context.Provider>

const ThemedRange = Themed(Range, 'Range')
export default ThemedRange

