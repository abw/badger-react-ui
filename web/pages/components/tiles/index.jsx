import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
import Tiles          from './_examples/Tiles/index.jsx'
import MinWidth       from './_examples/MinWidth/index.jsx'
import Gap            from './_examples/Gap/index.jsx'
import Cols           from './_examples/Cols/index.jsx'
import Rows           from './_examples/Rows/index.jsx'

const TilesExamples = () =>
  <div className="flow">
    <h1>Tiles</h1>
    <Tiles/>
    <Sections tocName="tiles">
      <Heading title="Properties"/>
      <MinWidth/>
      <Gap/>
      <Heading title="Child Properties"/>
      <Cols/>
      <Rows/>
    </Sections>
  </div>

export default TilesExamples