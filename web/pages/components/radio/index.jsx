import React          from 'react'
import Overview       from './_examples/Overview/index.jsx'
import Value          from './_examples/value/index.jsx'
import OnChange       from './_examples/onChange/index.jsx'
import ClassName      from './_examples/className/index.jsx'
import Inline         from './_examples/inline/index.jsx'
import Border         from './_examples/border/index.jsx'
import Options        from './_examples/options/index.jsx'
import Disabled       from './_examples/disabled/index.jsx'
// import Text           from './_examples/text/index.jsx'
// import Checked        from './_examples/checked/index.jsx'
// import CheckedText    from './_examples/checkedText/index.jsx'
// import OnChange       from './_examples/onChange/index.jsx'
// import ClassName      from './_examples/className/index.jsx'
// import CheckboxState  from './_examples/CheckboxState/index.jsx'
import Sections       from '@/web/page/Sections.jsx'
import Heading from '@/web/page/Heading.jsx'

const RadioExamples = () =>
  <div className="flow">
    <h1>Radio</h1>
    <Overview/>
    <Sections tocName="radio">
      <Heading title="Properties"/>
      <Value/>
      <OnChange/>
      <ClassName/>
      <Inline/>
      <Border/>
      <Heading title="Option Properties"/>
      <Options/>
      <Disabled/>
      {/* <Text/> */}
      {/* <OnChange/> */}
      {/* <ClassName/> */}
      {/* <Heading title="Components"/> */}
      {/* <CheckboxState/> */}
    </Sections>
  </div>

export default RadioExamples