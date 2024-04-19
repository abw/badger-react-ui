import React      from 'react'
import Accordion  from './_examples/Accordion/index.jsx'
import Items      from './_examples/items/index.jsx'
import Radius     from './_examples/radius/index.jsx'
import Shadow     from './_examples/shadow/index.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Heading    from '@/web/page/Heading.jsx'

const AccordionExamples = () =>
  <div className="flow">
    <h1>Accordion</h1>
    <Accordion/>
    <Sections tocName="accordion">
      <Heading title="Properties"/>
      <Items/>
      <Radius/>
      <Shadow/>
      {/* <Heading title="Event Handlers"/> */}
      {/* <Heading title="Components"/> */}
    </Sections>
  </div>

export default AccordionExamples