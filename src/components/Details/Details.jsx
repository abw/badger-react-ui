import React          from 'react'
import DetailsSummary from './Summary.jsx'
import DetailsContent from './Content.jsx'
import { Themed }     from '@/src/Theme.jsx'
import { classes, radiusClass, shadowClass }    from '@/src/utils/classes.js'

const Details = ({
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
}) =>
  <details
    className={
      classes(
        className,
        color,
        radiusClass(radius),
        shadowClass(shadow),
        { size, color, border, lined, shaded }
      )
    }
    open={open}
  >
    <Summary {...props}/>
    <Content {...props}/>
  </details>

export default Themed(Details, 'Details')

