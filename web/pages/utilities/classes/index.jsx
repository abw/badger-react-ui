import React        from 'react'
import Classes      from './_examples/classes/index.jsx'
import Border       from './_examples/borderClass/index.jsx'
import Radius       from './_examples/radiusClass/index.jsx'
import Shadow       from './_examples/shadowClass/index.jsx'
import Color        from './_examples/colorClass/index.jsx'
import Padding      from './_examples/paddingClass/index.jsx'
import Margin       from './_examples/marginClass/index.jsx'
import Grid         from './_examples/gridClass/index.jsx'
import Gap          from './_examples/gapClass/index.jsx'
import StyleProps   from './_examples/styleProps/index.jsx'
import StylePropsC  from './_examples/stylePropsClasses/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
// import Heading      from '@/web/page/Heading.jsx'

const ClassesExamples = () =>
  <div className="flow">
    <h1>CSS Classes</h1>
    <Sections tocName="classes">
      <Classes/>
      <Border/>
      <Radius/>
      <Shadow/>
      <Color/>
      <Padding/>
      <Margin/>
      <Gap/>
      <Grid/>
      <StyleProps/>
      <StylePropsC/>
    </Sections>
  </div>

export default ClassesExamples