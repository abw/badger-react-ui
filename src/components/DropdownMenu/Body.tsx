import Context from './Context'
import DropdownMenuOptions from './Options'

export const DropdownMenuBody = Context.Consumer(
  ({
    bodyProps,
    Options=DropdownMenuOptions
  }) =>
    <div {...bodyProps}>
      <Options/>
    </div>
)

export default DropdownMenuBody