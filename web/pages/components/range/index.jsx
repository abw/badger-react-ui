import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
import Range    from './_examples/Range/index.jsx'
import MinValue       from './_examples/minValue/index.jsx'
import MaxValue       from './_examples/maxValue/index.jsx'
import Min            from './_examples/min/index.jsx'
import Max            from './_examples/max/index.jsx'
import Step           from './_examples/step/index.jsx'
import MinRange       from './_examples/minRange/index.jsx'
import MaxRange       from './_examples/maxRange/index.jsx'
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
import ClassName      from './_examples/className/index.jsx'
import Style          from './_examples/style/index.jsx'
import OnChange       from './_examples/onChange/index.jsx'
import Children       from './_examples/children/index.jsx'
import Context        from './_examples/Context.jsx'
import Components     from './_examples/Components.jsx'
import CSSClasses     from './_examples/CSSClasses.jsx'


const RangeExamples = () =>
  <div className="flow">
    <h1>Range</h1>
    <Range/>
    <Sections tocName="range">
      <Heading title="Properties"/>
      <Min/>
      <Max/>
      <Step/>
      <MinValue/>
      <MaxValue/>
      <MinRange/>
      <MaxRange/>
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
      <ClassName/>
      <Style/>
      <Heading title="Event Handlers"/>
      <OnChange/>
      <Heading title="Context"/>
      <Context/>
      <Children/>
      <Heading title="Customisation"/>
      <Components/>
      <CSSClasses/>
    </Sections>
  </div>

export default RangeExamples