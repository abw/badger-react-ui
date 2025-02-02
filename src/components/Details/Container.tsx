import Context        from './Context'
import DetailsSummary from './Summary'
import DetailsContent from './Content'
import { DetailsContainerProps, DetailsSummaryProps } from './types.js'
import { classes, borderClass, radiusClass, shadowClass } from '@/src/utils/classes'

export const DetailsContainer = Context.Consumer<DetailsContainerProps>(
  ({
    className,
    color,
    size,
    lined,
    border,
    radius,
    shaded,
    shadow,
    isOpen,
    detailsClass='details',
    noIconClass='no-icon',
    wideSummary,
    wideSummaryClass='wide-summary',
    Summary=DetailsSummary,
    Content=DetailsContent,
    ...props
  }) =>
    <div
      className={
        classes(
          detailsClass,
          noIconClass,
          className,
          color,
          size,
          borderClass(border),
          radiusClass(radius),
          shadowClass(shadow),
          { lined, shaded, open: isOpen, [wideSummaryClass]: wideSummary }
        )
      }
    >
      <Summary
        {...props as DetailsSummaryProps}
      />
      { Boolean(isOpen) &&
        <Content {...props}/>
      }
    </div>
)

export default DetailsContainer

