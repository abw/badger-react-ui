import Context          from './Context'
import DropdownTrigger  from './Trigger'
import DropdownBody     from './Body'

export const DropdownContent = Context.Consumer(
  ({
    dropdownClass,
    isOpen,
    Trigger=DropdownTrigger,
    Body=DropdownBody
  }) => {
    return (
      <div className={dropdownClass}>
        <Trigger/>
        { isOpen && <Body/> }
      </div>
    )
  }
)

export default DropdownContent
