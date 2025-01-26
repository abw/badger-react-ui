import Context         from './Context'
import DropdownTrigger from './Trigger'
import DropdownBody    from './Body'

export const DropdownMenuContent = Context.Consumer(
  ({
    dropdownMenuClass,
    isOpen,
    Trigger=DropdownTrigger,
    Body=DropdownBody
  }) => {
    return (
      <div className={dropdownMenuClass}>
        <Trigger/>
        { isOpen && <Body/> }
      </div>
    )
  }
)

export default DropdownMenuContent