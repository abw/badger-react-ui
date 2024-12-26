import React                from 'react'
import Context              from './Context.js'
import MultiSelectSelection from './Selection.jsx'

const Selections = ({
  values,
  selectionsClass='selections',
  Selection=MultiSelectSelection,
}) =>
  <div className={selectionsClass}>
    { values.map(
      (selection, n) =>
        <Selection
          key={n}
          selection={selection}
        />
    )}
  </div>

export const MultiSelectSelections = Context.Consumer(Selections)
export default MultiSelectSelections
