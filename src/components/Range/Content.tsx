import Context from './Context'
import DefaultLayout from './Layout'
import { RangeContentProps } from './types'

export const RangeContent = Context.Consumer<
  RangeContentProps
>(
  ({
    rangeProps,
    Layout=DefaultLayout,
    children
  }) =>
    <div {...rangeProps}>
      { children
        ? <Context.Children>
            { children }
          </Context.Children>
        : <Layout/>
      }
    </div>
)

export default RangeContent
