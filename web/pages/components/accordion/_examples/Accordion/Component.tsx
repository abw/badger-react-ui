import { Accordion } from '@/src/index'

{/* START */}
// PRETEND: import { Accordion } from '@abw/badger-react-ui'

const AccordionExample = () =>
  <Accordion
    border lined
    radius={2}
    shadow={2}
    items={[
      { summary: 'Item One',   content: 'This is item one' },
      { summary: 'Item Two',   content: 'This is item two' },
      { summary: 'Item Three', content: 'This is item three' },
    ]}
  />

export default AccordionExample
