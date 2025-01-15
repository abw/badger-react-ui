import React      from 'react'
import Details    from '../Details/Details.jsx'
import { Themed } from '@/src/Theme'
import { classes, radiusClass, shadowClass } from '@/src/utils/classes'

const Accordion = ({
  items,
  shadow,
  radius,
  className,
  accordionClass='accordion',
  ...props
}) =>
  <div
    className={
      classes(
        className,
        accordionClass,
        shadowClass(shadow),
        radiusClass(radius)
      )
    }
  >
    { items.map(
      (item, n) =>
        <Details
          key={item.key??item.id??n}
          radius={radius}
          {...props}
          {...item}
        />
    )}
  </div>

export default Themed(Accordion, 'Accordion')