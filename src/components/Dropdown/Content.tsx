import Context          from './Context'
import DropdownTrigger  from './Trigger'
import DropdownBody     from './Body'
import { classes }      from '@/src/utils/classes'

export const DropdownContent = Context.Consumer(
  ({
    className='dropdown',
    openClass='open',
    closedClass='closed',
    isOpen,
    right,
    size,
    wide,
    Trigger=DropdownTrigger,
    Body=DropdownBody
  }) => {
    return (
      <div
        className={
          classes(
            className,
            size,
            isOpen ? openClass : closedClass,
            { right, wide }
          )
        }
      >
        <Trigger/>
        { isOpen &&
          <Body/>
        }
      </div>
    )
  }
)

export default DropdownContent