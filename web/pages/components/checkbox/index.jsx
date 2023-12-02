import React          from 'react'
import Overview       from './_examples/Overview/index.jsx'
import Text           from './_examples/text/index.jsx'
import Checked        from './_examples/checked/index.jsx'
import CheckedText    from './_examples/checkedText/index.jsx'
import OnChange       from './_examples/onChange/index.jsx'
import ClassName      from './_examples/className/index.jsx'
import CheckboxState  from './_examples/CheckboxState/index.jsx'
import Sections       from '@/web/page/Sections.jsx'
import Heading from '@/web/page/Heading.jsx'

const CheckboxExamples = () =>
  <div className="flow">
    <h1>Checkbox</h1>
    <Overview/>
    <Sections tocName="checkbox">
      <Heading title="Properties"/>
      <Text/>
      <Checked/>
      <CheckedText/>
      <OnChange/>
      <ClassName/>
      {/*
      <Color/>
      <IconRight/>
      <Cancel/>
      <CancelProps/>
      <Confirm/>
      <ConfirmProps/>
      <OnClick/>
      */}
      <Heading title="Components"/>
      <CheckboxState/>
    </Sections>
  </div>

export default CheckboxExamples