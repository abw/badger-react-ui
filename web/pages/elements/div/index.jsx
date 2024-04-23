import React        from 'react'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'
import Div          from './_examples/Div/index.jsx'
import Border       from './_examples/border/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import Color        from './_examples/color/index.jsx'
import Content      from './_examples/content/index.jsx'
import Flex         from './_examples/flex/index.jsx'
import Gap          from './_examples/gap/index.jsx'
import Grid         from './_examples/grid/index.jsx'
import Margin       from './_examples/margin/index.jsx'
import Padding      from './_examples/padding/index.jsx'
import Radius       from './_examples/radius/index.jsx'
import Shadow       from './_examples/shadow/index.jsx'
import Size         from './_examples/size/index.jsx'
import Style        from './_examples/style/index.jsx'

const DivExamples = () =>
  <div className="flow">
    <h1>Div</h1>
    <Div/>
    <Sections tocName="div">
      <Heading title="Properties"/>
      <ClassName/>
      <Content/>
      <Margin/>
      <Padding/>
      <Border/>
      <Radius/>
      <Flex/>
      <Grid/>
      <Gap/>
      <Shadow/>
      <Size/>
      <Color/>
      <Style/>
    </Sections>
  </div>

export default DivExamples