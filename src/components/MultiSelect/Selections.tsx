import Context  from './Context'
import MultiSelectSelection from './Selection.js'

export const MultiSelectSelections = Context.Consumer(
  ({
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
)

export default MultiSelectSelections
