import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
//import Section        from '@/web/page/Section.jsx'
//import Split          from '@/web/site/Split.jsx'
import RangeMinMax    from './_examples/RangeMinMax/index.jsx'
import MinValue       from './_examples/minValue/index.jsx'
import MaxValue       from './_examples/maxValue/index.jsx'
import Min            from './_examples/min/index.jsx'
import Max            from './_examples/max/index.jsx'
import Step           from './_examples/step/index.jsx'
import ShowValues     from './_examples/showValues/index.jsx'
import ValueLocations from './_examples/valueLocations/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import ShowTicks      from './_examples/showTicks/index.jsx'
import TickStep       from './_examples/tickStep/index.jsx'
import ShowScale      from './_examples/showScale/index.jsx'
import ShowLimits     from './_examples/showLimits/index.jsx'
import ShowInputs     from './_examples/showInputs/index.jsx'
import Color          from './_examples/color/index.jsx'
import Size           from './_examples/size/index.jsx'


const RangeMinMaxExamples = () =>
  <div className="flow">
    <h1>RangeMinMax</h1>
    <RangeMinMax/>
    <Sections tocName="rangeMinMax">
      <Heading title="Properties"/>
      <MinValue/>
      <MaxValue/>
      <Min/>
      <Max/>
      <Step/>
      <ShowValues/>
      <ValueLocations/>
      <DisplayValue/>
      <ShowTicks/>
      <TickStep/>
      <ShowScale/>
      <ShowLimits/>
      <ShowInputs/>
      <Color/>
      <Size/>
      {/*
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
    */}
    </Sections>
  </div>

export default RangeMinMaxExamples