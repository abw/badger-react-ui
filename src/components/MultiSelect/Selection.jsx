import React   from 'react'
import Context from './Context.js'
import WithIcons from '../Icon/WithIcons.jsx'

const Selection = ({
  selection,
  displaySelection,
  unselectMultiOption,
  selectionClass='selection',
  unselectIcon='cross'
}) =>
  <div
    className={selectionClass}
    onClick={() => unselectMultiOption(selection)}
  >
    <WithIcons
      iconRight={unselectIcon}
    >
      {displaySelection(selection)}
    </WithIcons>
  </div>

export const MultiSelectSelection = Context.Consumer(Selection)
export default MultiSelectSelection
