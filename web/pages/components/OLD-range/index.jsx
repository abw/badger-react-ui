import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
import Section        from '@/web/page/Section.jsx'
// import Split          from '@/web/site/Split.jsx'
import Range          from './_examples/Range/index.jsx'
import Value          from './_examples/value/index.jsx'
import Min            from './_examples/min/index.jsx'
import Max            from './_examples/max/index.jsx'
import Step           from './_examples/step/index.jsx'
import ShowTicks      from './_examples/showTicks/index.jsx'
import TickStep       from './_examples/tickStep/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import ShowValue      from './_examples/showValue/index.jsx'
import ValueLocation  from './_examples/valueLocation/index.jsx'
import ShowLimits     from './_examples/showLimits/index.jsx'
import ShowScale      from './_examples/showScale/index.jsx'
import ShowInput      from './_examples/showInput/index.jsx'
import Color          from './_examples/color/index.jsx'
import Size           from './_examples/size/index.jsx'
import ClassName      from './_examples/className/index.jsx'
import Style          from './_examples/style/index.jsx'
import Children       from './_examples/children/index.jsx'
import PropsTable from '@/web/site/PropsTable.jsx'
//import Value          from './_examples/value/index.jsx'
//import DisplayValue   from './_examples/displayValue/index.jsx'

const RangeExamples = () =>
  <div className="flow">
    <h1>Range</h1>
    <Range/>
    <Sections tocName="range">
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
      <ClassName/>
      <Style/>
      <Children/>
      <Heading title="Event Handlers"/>
      <Section code="onChange">
        Called when the value is changed.  Passed the new value as an argument.
      </Section>

      <Heading title="CSS Classes"/>
      <p>
        The following properties can be used to change the CSS classes used
        for different range components and elements.
      </p>
      <PropsTable
        items={[
          ['rangeClass', 'range', 'Main range container'],
          ['hasScaleClass', 'range-has-scale', 'Additional class added to container when `showScale` is set'],
          ['outputClass', 'range-output', 'Container for output value'],
          ['valueClass', 'range-value', 'Class for output value'],
          ['sliderClass', 'range-slider', 'Container for slider'],
          ['trackClass', 'range-track', 'Container for slider track'],
          ['selectionClass', 'range-selection', 'Selected part of range'],
          ['thumbsClass', 'range-thumbs', 'Container for thumb'],
          ['thumbClass', 'range-thumb', 'Class for thumb'],
          ['ticksClass', 'range-ticks', 'Container for ticks'],
          ['tickClass', 'range-tick', 'Class for each tick'],
          ['limitsClass', 'range-limits', 'Container for scale limits'],
          ['scaleValueClass', 'range-scale-value', 'Class for each value in limits or scale values'],
          ['inputClass', 'range-input', 'Container for input'],
          ['inputInputsClass', 'inputs inline', 'Container for input and stepping buttons'],
          ['inputPrefixClass', 'prefix shaded lined', 'Class for `stepDown` prefix button'],
          ['inputSuffixClass', 'suffix shaded lined', 'Class for `stepUp` suffix button'],
          ['stepClass', 'step', 'Class for both `stepDown` and `stepUp` input buttons'],
          ['disabledClass', 'disabled', 'Additional class for step buttons when disabled'],
        ]}
      />
    </Sections>
  </div>

export default RangeExamples