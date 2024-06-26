import React        from 'react'
import Overlay      from './_examples/Overlay/index.jsx'
import Fixed        from './_examples/fixed/index.jsx'
import Light        from './_examples/light/index.jsx'
import Dark         from './_examples/dark/index.jsx'
import Custom       from './_examples/custom/index.jsx'
import OverlayState from './_examples/OverlayState/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'

const OverlayExamples = () =>
  <div className="flow">
    <h1>Overlay</h1>
    <Overlay/>
    <Sections tocName="overlay">
      <Heading title="Properties"/>
      <Fixed/>
      <Light/>
      <Dark/>
      <Heading title="Styling"/>
      <Custom/>
      <Heading title="Components"/>
      <OverlayState/>
    </Sections>
  </div>

export default OverlayExamples