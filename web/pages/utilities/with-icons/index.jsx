import React        from 'react'
import WithIcons    from './_examples/WithIcons/index.jsx'
import Text         from './_examples/text/index.jsx'
import Icon         from './_examples/icon/index.jsx'
import IconLeft     from './_examples/iconLeft/index.jsx'
import IconLeftCls  from './_examples/iconLeftClass/index.jsx'
import IconRight    from './_examples/iconRight/index.jsx'
import IconRightCls from './_examples/iconRightClass/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'

const WithIconsExamples = () =>
  <div className="flow">
    <h1>WithIcons</h1>
    <WithIcons/>
    <Sections tocName="withicons">
      <Heading title="Properties"/>
      <Text/>
      <Icon/>
      <IconLeft/>
      <IconLeftCls/>
      <IconRight/>
      <IconRightCls/>
    </Sections>
  </div>

export default WithIconsExamples