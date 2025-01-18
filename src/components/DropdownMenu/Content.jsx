import React           from 'react'
import Context         from './Context.js'
import DropdownTrigger from './Trigger.jsx'
import DropdownOptions from './Options.jsx'
import useFloating     from '@/src/hooks/useFloating'
import { classes }     from '@/src/utils/classes'

const Content = ({
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

export default Context.Consumer(Content)