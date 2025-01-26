import Context   from './Context'
import WithIcons from '@/components/Icon/WithIcons'

const DropdownMenuTrigger = Context.Consumer(
  ({
    triggerProps,
    iconProps,
    safeAreaClass='safe-area',
  }) =>
    <div {...triggerProps}>
      <WithIcons {...iconProps}/>
      <div className={safeAreaClass}></div>
    </div>
)

export default DropdownMenuTrigger