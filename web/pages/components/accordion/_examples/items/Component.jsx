import React from 'react'
import { Accordion } from '@/src/index'

const AccordionExample = () =>
  /* START */
  <Accordion
    border lined radius={2}
    items={[
      {
        summary: 'Item One',
        content: 'This is item one'
      },
      {
        summary: 'Item Two',
        content: <div>This is item two</div>
      },
      {
        summary: 'Item Three',
        color: 'blue',
        shaded: true,
        content:
          <div className="surface-3 pad-v-2 pad-h-3 border bdr-1">
            This is item three
          </div>
      },
    ]}
  />
  /* END */

export default AccordionExample
