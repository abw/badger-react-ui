import { defaultRenderer, findOption, optionValue } from '@/src/utils'

// Default options that are only for use in MultiSelect context
export const multiSelectModelDefaults = {
  debugPrefix: 'MultiSelect > ',
  findOption,
  optionValue
}

// Options that can be passed to the model and are forwarded to consumers
export const multiSelectRenderDefaults = {
  displayOption: defaultRenderer('displayOption'),
  displaySelection: defaultRenderer('displaySelection'),
  multiSelectClass: 'multiselect',
  sortable: false,
  optionClass: 'option',
  selectedIcon: 'check',
  noIconClass: 'no-icon',
  selectionClass: 'selection',
  selectionsClass: 'selections',
  unselectIcon: 'cross',
  dragIcon: 'move',
  dragIconClass: 'drag-icon',
  // unselectedIcon,
  // displayOption=defaultRenderer('displayOption'),
}

// Combined set of above
export const multiSelectDefaults = {
  ...multiSelectModelDefaults,
  ...multiSelectRenderDefaults
}