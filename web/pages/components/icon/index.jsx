import React        from 'react'
import Icon         from './_examples/Icon/index.jsx'
import Name         from './_examples/name/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import Path         from './_examples/path/index.jsx'
import Sections     from '@/web/page/Sections.jsx'

const IconExamples = () =>
  <div className="prose flow">
    <h1>Icon</h1>
    <Icon/>
    <Sections tocName="icon">
      <Name/>
      <ClassName/>
      <Path/>
    </Sections>
  </div>

export default IconExamples