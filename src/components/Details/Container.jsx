import React            from 'react'
import Context          from './Context.js'
import DetailsSummary   from './Summary.jsx'
import DetailsContent   from './Content.jsx'
import { classes, borderClass, radiusClass, shadowClass } from '@/src/utils/classes.js'

const Container = ({
  className,
  size,
  color,
  lined,
  border,
  radius,
  shaded,
  shadow,
  isOpen,
  toggleOpen,
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
        borderClass(border),
        radiusClass(radius),
        shadowClass(shadow),
        { size, color, lined, shaded, open: isOpen, [wideSummaryClass]: wideSummary }
      )
    }
  >
    <Summary toggleOpen={toggleOpen} {...props}/>
    { Boolean(isOpen) &&
      <Content {...props}/>
    }
  </div>

export default Context.Consumer(Container)

