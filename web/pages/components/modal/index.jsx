import React        from 'react'
import Modal        from './_examples/Modal/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import Close        from './_examples/close/index.jsx'
import CloseIcon    from './_examples/closeIcon/index.jsx'
import Text         from './_examples/text/index.jsx'
import Title        from './_examples/title/index.jsx'
import Header       from './_examples/header/index.jsx'
import Footer       from './_examples/footer/index.jsx'
import ModalState   from './_examples/ModalState/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Heading from '@/web/page/Heading.jsx'

const ModalExamples = () =>
  <div className="flow">
    <h1>Modal</h1>
    <Modal/>
    <Sections tocName="modal">
      <Heading title="Properties"/>
      <ClassName/>
      <Close/>
      <CloseIcon/>
      <Text/>
      <Title/>
      <Header/>
      <Footer/>
      <Heading title="Components"/>
      <ModalState/>
    </Sections>
  </div>

export default ModalExamples