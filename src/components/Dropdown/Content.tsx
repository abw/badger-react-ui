import Context          from './Context'
import DropdownTrigger  from './Trigger'
import DropdownBody     from './Body'
import useFloating      from '@/src/hooks/useFloating'
import { classes }      from '@/src/utils/classes'

export const DropdownContent = Context.Consumer(
  ({
    className='dropdown',
    openClass='open',
    closedClass='closed',
    placement,
    offset=8,
    isOpen,
    right,
    size,
    wide,
    Trigger=DropdownTrigger,
    Body=DropdownBody
  }) => {
    const { refs, floatingStyles } = useFloating({
      offset,
      placement,
      right,
    })
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
        <Trigger floatingRef={refs.setReference}/>
        { isOpen &&
          <Body
            floatingRef={refs.setFloating}
            floatingStyle={floatingStyles}
          />
        }
      </div>
    )
  }
)

export default DropdownContent