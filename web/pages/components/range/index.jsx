import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
import Section        from '@/web/page/Section.jsx'
import Split          from '@/web/site/Split.jsx'
import Range          from './_examples/Range/index.jsx'
import ShowTicks      from './_examples/showTicks/index.jsx'
import ShowValue      from './_examples/showValue/index.jsx'
import ValueLocation  from './_examples/valueLocation/index.jsx'
import ShowLimits     from './_examples/showLimits/index.jsx'
import ShowInput      from './_examples/showInput/index.jsx'
//import Value          from './_examples/value/index.jsx'
//import DisplayValue   from './_examples/displayValue/index.jsx'

const RangeExamples = () =>
  <div className="flow">
    <h1>Range</h1>
    <Range/>
    <Sections tocName="range">
      <Heading title="Properties"/>
      <ShowTicks/>
      <ShowValue/>
      <ValueLocation/>
      <ShowLimits/>
      <ShowInput/>
      <Split>
        <div className="flow">
          <Heading title="Event Handlers"/>
          <Section code="onChanged">
            Called when the value is changed.
          </Section>
        </div>
        <div className="flow">
          <Heading title="CSS Classes"/>
          <Section code="className">
            Add an additional class to the range container.
            There is no default value but the <code>rangeClass</code> is
            also added to this container.
          </Section>
          <Section code="rangeClass">
            Set the main class for the range container.
            The default is <code>range</code>.
          </Section>
          <Section code="sliderClass">
            Set the class for the range slider component.
            The default is <code>slider</code>.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default RangeExamples