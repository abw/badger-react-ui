import Details from '@/components/Details/Details'
import { Themed } from '@/src/Theme'
import { AccordionProps } from './types'
import { classes, radiusClass, shadowClass } from '@/src/utils/classes'

const Accordion = ({
  items,
  shadow,
  radius,
  className,
  accordionClass='accordion',
  ...props
}: AccordionProps) =>
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

/**
 * Render an accordion with each leaf independently able to open/close.
 * Created as a series of {@link Details} components.
 *
 * Example:
 * ```tsx
 * <Accordion
 *    border lined
 *    radius={2}
 *    shadow={2}
 *    items={[
 *      { summary: 'Item One',   content: 'This is item one' },
 *      { summary: 'Item Two',   content: 'This is item two' },
 *      { summary: 'Item Three', content: 'This is item three' },
 *    ]}
 *  />
 * ```
 */
const ThemedAccordion = Themed(Accordion, 'Accordion')
export default ThemedAccordion