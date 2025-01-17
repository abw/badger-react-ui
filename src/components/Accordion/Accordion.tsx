import Details from '@/components/Details/Details'
import { Themed } from '@/src/Theme'
import { AccordionType } from './types'
import { classes, radiusClass, shadowClass } from '@/src/utils/classes'

const Accordion: AccordionType = ({
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