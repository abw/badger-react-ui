import React        from 'react'
import Spinner      from './_examples/Spinner/index.jsx'
import Size         from './_examples/size/index.jsx'
import Color        from './_examples/color/index.jsx'
import Reverse      from './_examples/reverse/index.jsx'
import Stroke       from './_examples/stroke/index.jsx'
import StrokeStop   from './_examples/strokeStop/index.jsx'
import Fill         from './_examples/fill/index.jsx'
import FillStop     from './_examples/fillStop/index.jsx'
import Icon         from './_examples/icon/index.jsx'
import BgIcon       from './_examples/bgIcon/index.jsx'
import BgColor      from './_examples/bgColor/index.jsx'
import BgStroke     from './_examples/bgStroke/index.jsx'
import BgStrokeStop from './_examples/bgStrokeStop/index.jsx'
import BgFill       from './_examples/bgFill/index.jsx'
import BgFillStop   from './_examples/bgFillStop/index.jsx'
import Shrink       from './_examples/shrink/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'

const SpinnerExamples = () =>
  <div className="flow">
    <h1>Spinner</h1>
    <Spinner/>
    <Sections tocName="spinner">
      <Heading title="Properties"/>
      <Size/>
      <Reverse/>
      <Shrink/>
      <Icon/>
      <Color/>
      <Stroke/>
      <StrokeStop/>
      <Fill/>
      <FillStop/>
      <BgIcon/>
      <BgColor/>
      <BgStroke/>
      <BgStrokeStop/>
      <BgFill/>
      <BgFillStop/>
    </Sections>
  </div>

export default SpinnerExamples