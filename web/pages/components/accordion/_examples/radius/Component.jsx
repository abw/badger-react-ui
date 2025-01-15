import React from 'react'
import { Accordion } from '@/src/index'

const AccordionExample = () =>
  /* START */
  <Accordion
    border lined
    radius={2}
    items={[
      { summary: 'Item One',   content: 'This is item one' },
      { summary: 'Item Two',   content: 'This is item two' },
      { summary: 'Item Three', content: 'This is item three' },
    ]}
  />
  /* END */

export default AccordionExample
