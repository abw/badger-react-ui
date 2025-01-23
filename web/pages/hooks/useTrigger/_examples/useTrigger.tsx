import { useTrigger, Checkbox } from '@/src/index'
/* START */
import React from 'react'
// PRETEND: import { useTrigger, Checkbox } from '@abw/badger-react-ui

const UseTriggerExample = () => {
  const [openOnHover, setOpenOnHover] = React.useState(false)
  const {
    triggerProps,
    isOpen, toggleOpen, open, close,
    hasHover, hasFocus,
  } = useTrigger<HTMLButtonElement>({
    openOnHover,
    debug: true,
    debugPrefix: 'useTrigger: ',
    debugColor: 'red'
  })

  return (
    <div>
      <div className="flex gap-4 baseline">
        <button
          {...triggerProps}
          className="blue"
        >
          Trigger
        </button>
        { isOpen && <div>Hello World!</div>}
      </div>

      <div className="grid-3 mar-t-4 gap-4">
        <StatusItem
          label="hover"
          truth={hasHover}
        />
        <StatusItem
          label="focus"
          truth={hasFocus}
        />
        <StatusItem
          label="open"
          truth={isOpen}
        />
      </div>

      <div className="compact info alert mar-t-4 mar-b-none border">
        Toggle this checkbox to set the <code>openOnHover</code> property.
      </div>
      <Checkbox
        text="Open on hover"
        checked={openOnHover}
        onChange={setOpenOnHover}
        className=""
      />

      <div className="compact info alert mar-t-4 mar-b-2 border">
        Click these buttons to change the <code>open</code> state
      </div>
      <div className="small green flex gap-4">
        <button onClick={open}>Open</button>
        <button onClick={toggleOpen}>Toggle</button>
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}

const StatusItem = ({ label, truth }: { label: string, truth: boolean }) =>
  <div>
    <div className="smaller weight-300">
      { label }
    </div>
    <div className="large weight-500 lh-100">
      { truth ? 'true' : 'false' }
    </div>
  </div>

export default UseTriggerExample