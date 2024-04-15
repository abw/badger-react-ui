import React        from 'react'
import Overview     from './_examples/Overview/index.jsx'
import Text         from './_examples/text/index.jsx'
import Color        from './_examples/color/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import IconRight    from './_examples/iconRight/index.jsx'
import Cancel       from './_examples/cancel/index.jsx'
import CancelProps  from './_examples/cancelProps/index.jsx'
import Confirm      from './_examples/confirm/index.jsx'
import ConfirmProps from './_examples/confirmProps/index.jsx'
import OnClick      from './_examples/onClick/index.jsx'
import Modal        from './_examples/modal/index.jsx'
import ModalClass   from './_examples/modalClass/index.jsx'
import Prompt       from './_examples/prompt/index.jsx'
import Title        from './_examples/title/index.jsx'
import Header       from './_examples/header/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'

const ConfirmExamples = () =>
  <div className="flow">
    <h1>Confirm</h1>
    <Overview/>
    <Sections tocName="confirm">
      <Heading title="Properties"/>
      <Text/>
      <Color/>
      <IconRight/>
      <ClassName/>
      <Cancel/>
      <CancelProps/>
      <Confirm/>
      <ConfirmProps/>
      <Heading title="Modal Properties"/>
      <Modal/>
      <Prompt/>
      <Title/>
      <Header/>
      <ModalClass/>
      <Heading title="Event Handlers"/>
      <OnClick/>
    </Sections>
  </div>

export default ConfirmExamples