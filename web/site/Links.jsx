import React from 'react'
import Link from '@/ui/Link.jsx'

// eslint-disable-next-line react/display-name
export const CodeLink = ({ to, text, ...props }) =>
  <Link to={to} className="code" {...props}>{text}</Link>

// eslint-disable-next-line react/display-name
export const MakeCodeLink = (to, text) => props =>
  <CodeLink to={to} text={text} {...props}>{text}</CodeLink>

export const CodeHashLink = ({ id, text=id }) =>
  <a href={`#${id.toLowerCase()}`} className="code">{text}</a>

export const AccordionLink   = MakeCodeLink('/components/accordion', 'Accordion')
export const ButtonLink      = MakeCodeLink('/components/button', 'Button')
export const ButtonsLink     = MakeCodeLink('/components/buttons', 'Buttons')
export const DataTableLink   = MakeCodeLink('/components/datatable', 'DataTable')
export const DetailsLink     = MakeCodeLink('/components/details', 'Details')
export const IconLink        = MakeCodeLink('/components/icon', 'Icon')
export const SearchLink      = MakeCodeLink('/components/search', 'Search')
export const SelectLink      = MakeCodeLink('/components/select', 'Select')
export const MultiSelectLink = MakeCodeLink('/components/multiselect', 'MultiSelect')
export const SpinnerLink     = MakeCodeLink('/components/spinner', 'Spinner')
export const DivLink         = MakeCodeLink('/elements/div', 'Div')
export const FlexLink        = MakeCodeLink('/elements/flex', 'Flex')
