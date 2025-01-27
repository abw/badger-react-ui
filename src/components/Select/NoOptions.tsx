import Context from './Context'

export const SelectNoOptions = Context.Consumer(
  ({
    noOptions,
    noOptionsClass
  }) =>
    <div className={noOptionsClass}>
      {noOptions}
    </div>
)

export default SelectNoOptions
