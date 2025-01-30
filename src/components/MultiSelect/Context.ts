import { Model } from '@abw/react-context'
import { MultiSelectProps, MultiSelectRenderProps } from './types'
import { multiSelectDefaults } from './defaults'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { classes, debugFunction, SelectOption } from '@/src/utils'
import { hasValue, isArray } from '@abw/badger-utils'

export const MultiSelectContext = Model<MultiSelectProps, MultiSelectRenderProps>(
  config => {
    const {
      options,
      value: initialValue,
      values: initialValues = initialValue,
      debugPrefix,
      className,
      multiSelectClass,
      findOption,
      optionValue,
      ...props
    } = {
      ...multiSelectDefaults,
      ...config
    }

    const debug = useMemo(
      () => debugFunction({
        debug: props.debug,
        debugColor: props.debugColor,
        debugPrefix
      }),
      [props.debug, props.debugColor, debugPrefix]
    )

    // Lookup the valid options that correspond to any values specified.
    // Options can be simple values (e.g. ['Cat', 'Dog']) or can be objects
    // containing a value or id property (e.g. [{ text: 'Cat', id: 123 }])
    const findValues = useCallback(
      (
        options: SelectOption[],
        values: undefined | SelectOption | (SelectOption | undefined)[]
      ) =>
        hasValue(values)
          ? (isArray(values) ? values : [values])
              .map(
                value => hasValue(value)
                  ? findOption(
                    options,
                    optionValue(value)
                  )[0]
                  : null
              )
              .filter(hasValue)
          : [ ],
      [findOption, optionValue]
    )

    // Store the currently selected values
    const [values, setValues] = useState<SelectOption[]>(
      findValues(options, initialValues)
    )

    // If the initial values change then we have to update the selected values
    useEffect(
      () => setValues(
        findValues(options, initialValues)
      ),
      // IMPORTANT!  We only want this to run when the list of initial values
      // change. We want to select the valid options that correspond to the
      // new values.  We DON'T want this to run any time the options change
      // as that's handled below.  So it's correct that options is NOT listed
      // as a dependency.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [initialValues, findValues]
    )

    // If the list of options changes then we need to re-select the current
    // values in the context of the new list.  For example, we might have some
    // options that change their text values, e.g. { text: 'Dog', id: 'dog' }
    // could switch to { text: 'Chien', id: 'dog' } when a different language
    // is selected
    useEffect(
      () => setValues(
        values => findValues(options, values)
      ),
      [options, findValues]
    )

    // Look to see if an option is selected.  The option passed can be a
    // simple value (e.g. 'Dog') or select option object with a value or id
    // property (e.g. { text: 'Daisy', value: 'dog' }).  The optionValue()
    // takes care of that and returns a simple value.  The findOption()
    // function then finds any option that matches the simple value or has
    // the value defined as an object property.
    const optionIsSelected = (option: SelectOption) => {
      const [ , index] = findOption(
        values,
        optionValue(option)
      )
      return hasValue(index)
    }

    const selectMultiOption = (option: SelectOption) => {
      if (! hasValue(option)) {
        return false
      }
      const [select, index] = findOption(
        options,
        optionValue(option)
      )
      if (! hasValue(index) || ! hasValue(select)) {
        debug(`item is not selectable:`, option)
        return false
      }
      debug(`selecting item at ${index}:`, select)
      setValues(
        values => [...values, select]
      )
      return true
    }

    const unselectMultiOption = (option: SelectOption) => {
      if (! hasValue(option)) {
        return false
      }
      const [selected, index] = findOption(
        values,
        optionValue(option)
      )
      if (! hasValue(index) || ! hasValue(selected)) {
        debug(`item is not selected:`, option)
        return false
      }
      debug(`unselecting item at ${index}:`, selected)
      setValues(
        values => values.filter(
          (_, n) => n !== index
        )
      )
      return true
    }

    const setValuesOrder = (values: SelectOption[]) => {
      setValues(values)
      // TODO: onChange
    }
    const onSelect = (option: SelectOption) => {
      debug('selected option:', option)
      debug('current values:', values)
      return unselectMultiOption(option) || selectMultiOption(option)
    }

    const contentClass = classes(
      className,
      multiSelectClass
    )

    return {
      test: 99,
      ...props,
      options,
      values,
      optionIsSelected,
      selectMultiOption,
      unselectMultiOption,
      onSelect,
      setValuesOrder,
      contentClass,
      multiSelectClass
    }
  }
)

export const {
  Provider: MultiSelectProvider,
  Consumer: MultiSelectConsumer,
  Use:      useMultiSelect
} = MultiSelectContext
export default MultiSelectContext


/*
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
    const state = this.initProps(props)
    this.state = {
      ...state
    }
  }
  initProps(props) {
    const { value=[], values=value, options=[], findOption, optionValue } = props
    const resolved = values
      .map(
        value => {
          const [selected] = findOption(
            options,
            optionValue(value)
          )
          return selected
        }
      )
      .filter(hasValue)
    return { values: resolved }
  }
  componentDidUpdate(prevProps) {
    let newState
    if (this.props.options !== prevProps.options) {
      newState = anyPropsChanged(VALUE_PROPS, this.props, prevProps)
        ? this.initProps(this.props)
        : this.initProps({ ...this.props, value: this.state.values })
    }
    else if (anyPropsChanged(VALUE_PROPS, this.props, prevProps)) {
      newState = this.initProps(this.props)
    }
    if (newState) {
      const changer = this.props.onUpdate || this.props.onChange
      this.setState(
        newState,
        () => changer(newState.values)
      )
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
    if (! hasValue(option)) {
      return null
    }
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
    if (! hasValue(option)) {
      return null
    }
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

*/