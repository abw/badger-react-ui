import Context   from './Context'
import WithIcons from '@/components/Icon/WithIcons'

export const DropdownTrigger = Context.Consumer(
  ({
    triggerProps,
    iconProps,
    safeAreaClass,
  }) =>
    <div {...triggerProps}>
      <WithIcons {...iconProps}/>
      <div className={safeAreaClass}></div>
    </div>
)

export default DropdownTrigger
