import { Generator, Context as Base } from '@abw/react-context'
import { optionValue, findOption, defaultRenderer } from '@/src/utils/index.js'
import { doNothing, hasValue } from '@abw/badger-utils'

class Context extends Base {
  static debug        = false
  static debugPrefix  = 'MultiSelect > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    findOption,
    optionValue,
    displaySelection: defaultRenderer('displaySelection'),
    onChange: doNothing,
  }
  static actions = [
    'onSelect', 'optionIsSelected', 'selectMultiOption', 'unselectMultiOption',
    'setValues'
  ]
  constructor(props) {
    super(props)
    const { values=[], options=[], findOption, optionValue } = props
    const resolved = values.map(
      value => {
        const [selected] = findOption(
          options,
          optionValue(value)
        )
        return selected
      }
    )
    //console.log(`values: `, values)
    //console.log(`resolved values: `, resolved)
    this.state = {
      values: resolved
    }
  }
  onSelect(option) {
    this.debug('selected option:', option)
    this.debug('current values:', this.state.values)
    return this.unselectMultiOption(option) || this.selectMultiOption(option)
  }
  optionIsSelected(option) {
    const [ , index] = this.props.findOption(
      this.state.values,
      this.props.optionValue(option)
    )
    return hasValue(index)
  }
  unselectMultiOption(option) {
    const [selected, index] = this.props.findOption(
      this.state.values,
      this.props.optionValue(option)
    )
    if (! hasValue(index)) {
      this.debug(`item is not selected:`, option)
      return false
    }
    this.debug(`unselecting item at ${index}:`, selected)
    const values = this.state.values.filter(
      (_, n) => n !== index
    )
    this.setValues(values)
    return true
  }
  selectMultiOption(option) {
    const [select, index] = this.props.findOption(
      this.props.options,
      this.props.optionValue(option)
    )
    if (! hasValue(index)) {
      this.debug(`item is not selectable:`, option)
      return false
    }
    this.debug(`selecting item at ${index}:`, select)
    const values = [ ...this.state.values, select ]
    this.setValues(values)
    return true
  }
  setValues(values) {
    this.debug('setValues:', values)
    this.setState(
      { values },
      () => this.props.onChange(values)
    )
  }
}

export const MultiSelectContext = Generator(Context)
export const {
  Provider: MultiSelectProvider,
  Consumer: MultiSelectConsumer,
  Use:      useMultiSelect
} = MultiSelectContext
export default MultiSelectContext