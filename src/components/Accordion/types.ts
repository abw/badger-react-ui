import { DetailsProps } from '@/components/Details/types'

/* I can't figure out why VSCode can display the props for a themed component
 * when they're specified as a type, but not when they're specified as an
 * interface.  Until I figure it out I'm going to stick with types.
 */

export type AccordionProps = {
  items: AccordionItem[]
  accordionClass?: string
} & Omit<DetailsProps, 'summary'>

export type AccordionItem = {
  key?: string | number
  id?: string | number
} & DetailsProps


/*
export interface AccordionItem extends
  DetailsProps
{
  key?: string | number
  id?: string | number
}

export interface AccordionProps extends
  DetailsProps
{
  items: AccordionItem[]
  accordionClass?: string
}
*/

