import React        from 'react'
import Badge        from './_examples/Badge/index.jsx'
import Text         from './_examples/text/index.jsx'
import Tag          from './_examples/tag/index.jsx'
import Color        from './_examples/color/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import Size         from './_examples/size/index.jsx'
import Border       from './_examples/border/index.jsx'
import Radius       from './_examples/radius/index.jsx'
import Shadow       from './_examples/shadow/index.jsx'
import Icon         from './_examples/icon/index.jsx'
import IconLeft     from './_examples/iconLeft/index.jsx'
import IconRight    from './_examples/iconRight/index.jsx'
import Tooltip      from './_examples/tooltip/index.jsx'
import Content      from './_examples/Content/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'

const BadgeExamples = () =>
  <div className="flow">
    <h1>Badge</h1>
    <Badge/>
    <Sections tocName="badge">
      <Heading title="Properties"/>
      <Text/>
      <Tag/>
      <Color/>
      <ClassName/>
      <Border/>
      <Radius/>
      <Shadow/>
      <Size/>
      <Icon/>
      <IconLeft/>
      <IconRight/>
      <Tooltip/>
      <Heading title="Components"/>
      <Content/>
    </Sections>
  </div>

export default BadgeExamples