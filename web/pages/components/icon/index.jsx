import React        from 'react'
import Icon         from './_examples/Icon/index.jsx'
import Name         from './_examples/name/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import Size         from './_examples/size/index.jsx'
import Color        from './_examples/color/index.jsx'
import Path         from './_examples/path/index.jsx'
import IconData     from './_examples/IconData/index.jsx'
import Sections     from '@/web/page/Sections.jsx'

const IconExamples = () =>
  <div className="flow">
    <h1>Icon</h1>
    <Icon/>
    <Sections tocName="icon">
      <Name/>
      <ClassName/>
      <Size/>
      <Color/>
      <Path/>
      <IconData/>
    </Sections>
  </div>

export default IconExamples