import { DetailsProps } from '@/components/Details/types'

export type AccordionItem = DetailsProps & {
  key?: string | number
  id?: string | number
}

export type AccordionProps = DetailsProps & {
  items: AccordionItem[]
  accordionClass?: string
}

export type AccordionType = React.FC<AccordionProps>