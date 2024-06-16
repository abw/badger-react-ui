import React   from 'react'
import Context from './Context.js'
import WithIcons from '../Icon/WithIcons.jsx'

const Selection = ({
  selection,
  displaySelection,
  unselectMultiOption,
  selectionClass='selection',
  unselectIcon='cross',
  dragHandle
}) =>
  <div
    className={selectionClass}
    onClick={() => unselectMultiOption(selection)}
  >
    {dragHandle}
    <WithIcons
      iconRight={unselectIcon}
    >
      {displaySelection(selection)}
    </WithIcons>
  </div>

export const MultiSelectSelection = Context.Consumer(Selection)
export default MultiSelectSelection
