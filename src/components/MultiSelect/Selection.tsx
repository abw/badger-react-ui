import Context from './Context'
import WithIcons from '@/components/Icon/WithIcons'
import { MultiSelectSelectionProps } from './types'

export const MultiSelectSelection = Context.Consumer<
  MultiSelectSelectionProps
>(
  ({
    selection,
    displaySelection,
    unselectMultiOption,
    selectionClass,
    unselectIcon,
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
)

export default MultiSelectSelection
