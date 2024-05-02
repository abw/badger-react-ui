import React        from 'react'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'
import Grid         from './_examples/Grid/index.jsx'
import Gap          from './_examples/gap/index.jsx'
import Cols         from './_examples/cols/index.jsx'
import Stack        from './_examples/stack/index.jsx'
import Start        from './_examples/start/index.jsx'
import Middle       from './_examples/middle/index.jsx'
import End          from './_examples/end/index.jsx'
import Baseline     from './_examples/baseline/index.jsx'
import Breakpoints  from './_examples/breakpoints/index.jsx'
//import Right        from './_examples/right/index.jsx'
//import Space        from './_examples/space/index.jsx'
//import Evenly       from './_examples/evenly/index.jsx'

const GridExamples = () =>
  <div className="flow">
    <h1>Grid</h1>
    <Grid/>
    <Sections tocName="grid">
      <Heading title="Properties"/>
      <Cols/>
      <Gap/>
      <Start/>
      <Middle/>
      <Baseline/>
      <End/>
      <Stack/>
      <Breakpoints/>
      {/*
      <Center/>
      <Right/>
      <Space/>
      <Evenly/>
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

export default GridExamples