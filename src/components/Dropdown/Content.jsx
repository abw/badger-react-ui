import React            from 'react'
import Context          from './Context.js'
import DropdownTrigger  from './Trigger.jsx'
import DropdownBody     from './Body.jsx'
import useFloating      from '@/src/hooks/useFloating.jsx'
import { classes }      from '@/src/utils/classes.js'
// import { useFloating, offset as fuiOffset } from '@floating-ui/react'

const Content = ({
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

export default Context.Consumer(Content)