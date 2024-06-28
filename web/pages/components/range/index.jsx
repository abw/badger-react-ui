import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
// import Section        from '@/web/page/Section.jsx'
//import Split          from '@/web/site/Split.jsx'
import Range    from './_examples/Range/index.jsx'
import MinValue       from './_examples/minValue/index.jsx'
import MaxValue       from './_examples/maxValue/index.jsx'
import Min            from './_examples/min/index.jsx'
import Max            from './_examples/max/index.jsx'
import Step           from './_examples/step/index.jsx'
import ShowValues     from './_examples/showValues/index.jsx'
import AlignValues    from './_examples/alignValues/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import ShowTicks      from './_examples/showTicks/index.jsx'
import TickStep       from './_examples/tickStep/index.jsx'
import ShowScale      from './_examples/showScale/index.jsx'
import ShowLimits     from './_examples/showLimits/index.jsx'
import ShowInputs     from './_examples/showInputs/index.jsx'
import AlignInputs    from './_examples/alignInputs/index.jsx'
import InputsSize     from './_examples/inputsSize/index.jsx'
import Color          from './_examples/color/index.jsx'
import Size           from './_examples/size/index.jsx'
import OnChange       from './_examples/onChange/index.jsx'
import Context        from './_examples/Context.jsx'
import Children       from './_examples/children/index.jsx'


const RangeExamples = () =>
  <div className="flow">
    <h1>Range</h1>
    <Range/>
    <Sections tocName="rangeMinMax">
      <Heading title="Properties"/>
      <Min/>
      <Max/>
      <Step/>
      <MinValue/>
      <MaxValue/>
      <ShowValues/>
      <AlignValues/>
      <DisplayValue/>
      <ShowTicks/>
      <TickStep/>
      <ShowScale/>
      <ShowLimits/>
      <ShowInputs/>
      <AlignInputs/>
      <InputsSize/>
      <Color/>
      <Size/>
      <Heading title="Event Handlers"/>
      <OnChange/>
      <Heading title="Context"/>
      <Context/>
      <Children/>
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

export default RangeExamples