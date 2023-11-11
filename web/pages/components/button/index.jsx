import React        from 'react'
import Button       from './_examples/button/index.jsx'
import Text         from './_examples/text/index.jsx'
import OnClick      from './_examples/onClick/index.jsx'
import Disabled     from './_examples/disabled/index.jsx'
import Color        from './_examples/color/index.jsx'
import Bright       from './_examples/bright/index.jsx'
import Dark         from './_examples/dark/index.jsx'
import Outline      from './_examples/outline/index.jsx'
import Bare         from './_examples/bare/index.jsx'
import Shaded       from './_examples/shaded/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import Size         from './_examples/size/index.jsx'
import Border       from './_examples/border/index.jsx'
import Radius       from './_examples/radius/index.jsx'
import Shadow       from './_examples/shadow/index.jsx'
import Icon         from './_examples/icon/index.jsx'
import IconLeft     from './_examples/iconLeft/index.jsx'
import IconRight    from './_examples/iconRight/index.jsx'
import Label        from './_examples/label/index.jsx'
import Tooltip      from './_examples/tooltip/index.jsx'
import Sections     from '@/web/page/Sections.jsx'

const ButtonExamples = () =>
  <div className="prose flow">
    <h1>Button</h1>
    <Button/>

    <Sections tocName="button">
      <Text/>
      <OnClick/>
      <Disabled/>
      <Color/>
      <Bright/>
      <Dark/>
      <Shaded/>
      <Outline/>
      <Bare/>
      <ClassName/>
      <Border/>
      <Radius/>
      <Shadow/>
      <Size/>
      <Icon/>
      <IconLeft/>
      <IconRight/>
      <Label/>
      <Tooltip/>
      <div>
        type label tabIndex
      </div>
    </Sections>
  </div>

export default ButtonExamples