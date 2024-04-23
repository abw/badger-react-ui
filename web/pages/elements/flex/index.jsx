import React        from 'react'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'
import Flex         from './_examples/Flex/index.jsx'
import Center       from './_examples/center/index.jsx'
import Right        from './_examples/right/index.jsx'
import Space        from './_examples/space/index.jsx'
import Evenly       from './_examples/evenly/index.jsx'
import Start        from './_examples/start/index.jsx'
import Middle       from './_examples/middle/index.jsx'
import Baseline     from './_examples/baseline/index.jsx'
import End          from './_examples/end/index.jsx'

const FlexExamples = () =>
  <div className="flow">
    <h1>Flex</h1>
    <Flex/>
    <Sections tocName="flex">
      <Heading title="Properties"/>
      <Center/>
      <Right/>
      <Space/>
      <Evenly/>
      <Start/>
      <Middle/>
      <Baseline/>
      <End/>
      {/*
      <ClassName/>
      <Close/>
      <CloseIcon/>
      <Text/>
      <Title/>
      <Header/>
      <Footer/>
      <Heading title="Components"/>
      <ModalState/>
      */}
    </Sections>
  </div>

export default FlexExamples