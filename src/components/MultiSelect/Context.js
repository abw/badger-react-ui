import { Generator, Context as Base } from '@abw/react-context'
import { optionValue, findOption, defaultRenderer } from '@/src/utils/index.js'
import { hasValue } from '@abw/badger-utils'

class Context extends Base {
  static debug        = false
  static debugPrefix  = 'MultiSelect > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    findOption,
    optionValue,
    displaySelection: defaultRenderer('displaySelection'),
  }
  static actions = [
    'onSelect', 'optionIsSelected', 'selectMultiOption', 'unselectMultiOption'
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
    console.log(`resolved values: `, resolved)

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
    this.setState({
      values: this.state.values.filter(
        (_, n) => n !== index
      )
    })
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
    this.setState({
      values: [ ...this.state.values, select ]
    })
    return true
  }
}

export const MultiSelectContext = Generator(Context)
export const {
  Provider: MultiSelectProvider,
  Consumer: MultiSelectConsumer,
  Use:      useMultiSelect
} = MultiSelectContext
export default MultiSelectContext