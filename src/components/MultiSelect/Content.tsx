import Context from './Context'
import DefaultOption from './Option.jsx'
import DefaultSelect from '@/components/Select/Select'
import DefaultSelections from './Selections'
import DefaultSortSelections from './SortSelections'
import { doNothing } from '@abw/badger-utils'
import { SelectOption } from '@/src/utils/option'

export const MultiSelectContent = Context.Consumer(
  ({
    contentClass,
    sortable,
    Option=DefaultOption,
    Select=DefaultSelect,
    Selections=DefaultSelections,
    SortSelections=DefaultSortSelections,
    options,
    onSelect,
    search,
    select
  }) =>
    <div className={contentClass}>
      <Select
        search={search}
        options={options}
        onUpdate={doNothing}
        // @ts-ignore-error.  Here we go again
        onSelect={onSelect}
        // @ts-ignore-error.  Going down the typescript rabbit hole to hell
        displayOption={
          (option: SelectOption) =>
            <Option option={option}/>
        }
        {...select}
      />
      { sortable
        ? <SortSelections/>
        : <Selections/>
      }
    </div>
)

export default MultiSelectContent
