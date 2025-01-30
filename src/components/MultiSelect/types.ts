import { DebugOptions, SelectOption } from '@/src/utils'
import { multiSelectModelDefaults, multiSelectRenderDefaults } from './defaults'
import { PropsObject } from '@/src/types'
import { SortableDataItem } from '../Sortable'
// import { UseComplexValuesSetters } from '@/src/hooks'

export type MultiSelectModelDefaults  = typeof multiSelectModelDefaults
export type MultiSelectRenderDefaults = typeof multiSelectRenderDefaults

export type MultiSelectProps =
  DebugOptions &
  Partial<MultiSelectModelDefaults> &
  Partial<MultiSelectRenderDefaults> &
  MultiSelectCommonProps & {
  value?: SelectOption | SelectOption[]
  values?: SelectOption[]
}

export type MultiSelectRenderProps =
  // Omit<MultiSelectRenderDefaults, 'selectedIcon'> &
  MultiSelectRenderDefaults &
  MultiSelectCommonProps & {
  // MultiSelectState &
  // MultiSelectStateSetters & {
  contentClass: string
  optionIsSelected: (option: SelectOption) => boolean,
  onSelect: (option: SelectOption) => void
  selectMultiOption: (option: SelectOption) => boolean
  unselectMultiOption: (option: SelectOption) => boolean
  setValuesOrder: (values: SelectOption[]) => void
}

export type MultiSelectCommonProps = {
  options: SelectOption[],
  search?: boolean
  className?: string,
  sortable?: boolean
  selectedIcon?: string | PropsObject
  unselectedIcon?: string | PropsObject
  Content?: React.FC
  Option?: React.FC
  Select?: React.FC
  Selection?: React.FC
  Selections?: React.FC
  SortSelections?: React.FC
}

/*
export type MultiSelectState = {
  test: number
}
export type MultiSelectStateSetters = UseComplexValuesSetters<MultiSelectState>
*/

export type MultiSelectOptionProps = {
  option: SelectOption
}

export type MultiSelectSelectionProps = {
  selection: SelectOption,
  //displaySelection,
  //unselectMultiOption,
  dragHandle?: JSX.Element
}

export type MultiSelectSortItem = SortableDataItem & {
  value: SelectOption
}