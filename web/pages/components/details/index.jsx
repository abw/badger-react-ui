import React    from 'react'
import Details  from './_examples/Details/index.jsx'
import Summary  from './_examples/Summary/index.jsx'
import Content  from './_examples/Content/index.jsx'
import Open     from './_examples/Open/index.jsx'
import Lined    from './_examples/Lined/index.jsx'
import Border   from './_examples/Border/index.jsx'
import Radius   from './_examples/Radius/index.jsx'
import Shaded   from './_examples/Shaded/index.jsx'
import Shadow   from './_examples/Shadow/index.jsx'
import Color    from './_examples/Color/index.jsx'
import Sections from '@/web/page/Sections.jsx'
import Heading  from '@/web/page/Heading.jsx'
import Section from '@/web/page/Section.jsx'

const DetailsExamples = () =>
  <div className="flow">
    <h1>Details</h1>
    <Details/>
    <Sections tocName="details">
      <Heading title="Properties"/>
      <Summary/>
      <Content/>
      <Open/>
      <Lined/>
      <Border/>
      <Radius/>
      <Shaded/>
      <Shadow/>
      <Color/>

      <Heading title="CSS Classes"/>
      <Section code="className">
        Set a CSS class for the <code>details</code> container element.
      </Section>
      <Section code="summaryClass">
        Set a CSS class for the <code>summary</code> element.
      </Section>
      <Section code="contentClass">
        Set a CSS class for the content <code>div</code> element.
      </Section>

      <Heading title="Components"/>
      <Section code="Summary" id="Summary-component">
        Renders the summary element.
      </Section>
      <Section code="Content" id="Content=component">
        Renders the content.
      </Section>

    </Sections>
  </div>

export default DetailsExamples