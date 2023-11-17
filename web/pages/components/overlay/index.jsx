import React        from 'react'
import Overlay      from './_examples/Overlay/index.jsx'
import Fixed        from './_examples/fixed/index.jsx'
import Color        from './_examples/color/index.jsx'
import Custom       from './_examples/custom/index.jsx'
import OverlayState from './_examples/OverlayState/index.jsx'
import Sections     from '@/web/page/Sections.jsx'

const OverlayExamples = () =>
  <div className="prose flow">
    <h1>Overlay</h1>
    <Sections tocName="overlay">
      <Overlay/>
      <Fixed/>
      <Color/>
      <Custom/>
      <OverlayState/>
    </Sections>
  </div>

export default OverlayExamples