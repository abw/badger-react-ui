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
        // @ts-expect-error.  Worked in React 18.  Broken in 19.  bigint bollocks
        ? <Context.Children>
            { children }
          </Context.Children>
        : <Layout/>
      }
    </div>
)

export default RangeContent
