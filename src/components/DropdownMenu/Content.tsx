import Context         from './Context'
import DropdownTrigger from './Trigger'
import DropdownOptions from './Options'
import useFloating     from '@/src/hooks/useFloating'
import { classes }     from '@/src/utils/classes'

export const DropdownMenuContent = Context.Consumer(
  ({
    className='dropdown',
    openClass='open',
    closedClass='closed',
    isOpen,
    size,
    wide,
    offset=8,
    placement,
    right,
    Trigger=DropdownTrigger,
    Options=DropdownOptions
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
          <Options
            floatingRef={refs.setFloating}
            floatingStyle={floatingStyles}
          />
        }
      </div>
    )
  }
)

export default DropdownMenuContent