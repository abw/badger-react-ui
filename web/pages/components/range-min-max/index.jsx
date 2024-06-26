import React          from 'react'
//import Sections       from '@/web/page/Sections.jsx'
//import Heading        from '@/web/page/Heading.jsx'
//import Section        from '@/web/page/Section.jsx'
//import Split          from '@/web/site/Split.jsx'
import RangeMinMax    from './_examples/RangeMinMax/index.jsx'

const RangeMinMaxExamples = () =>
  <div className="flow">
    <h1>RangeMinMax</h1>
    <RangeMinMax/>
    {/*
    <Sections tocName="rangeMinMax">
      <Heading title="Properties"/>
      <Value/>
      <Min/>
      <Max/>
      <Step/>
      <ShowValue/>
      <ValueLocation/>
      <DisplayValue/>
      <ShowTicks/>
      <TickStep/>
      <ShowScale/>
      <ShowLimits/>
      <ShowInput/>
      <Color/>
      <Size/>
      <Children/>
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
    */}
  </div>

export default RangeMinMaxExamples