import DetailsSummary from './Summary'
import DetailsContent from '../Content'
import { classes, borderClass, radiusClass, shadowClass } from '@/src/utils/classes'
import { DetailsNativeContainerProps, DetailsSummaryProps } from '../types'

const DetailsNativeContainer = ({
  className,
  size,
  color,
  lined,
  border,
  radius,
  shaded,
  shadow,
  open,
  Summary=DetailsSummary,
  Content=DetailsContent,
  ...props
}: DetailsNativeContainerProps) =>
  <details
    className={
      classes(
        className,
        color,
        borderClass(border),
        radiusClass(radius),
        shadowClass(shadow),
        { size, color, lined, shaded }
      )
    }
    open={open}
  >
    <Summary {...props as DetailsSummaryProps}/>
    <Content {...props}/>
  </details>

export default DetailsNativeContainer

