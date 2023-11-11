import React        from 'react'
import Buttons      from './_examples/Buttons/index.jsx'
import ButtonsProp  from './_examples/buttonsProp/index.jsx'
import Outline      from './_examples/outline/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import ButtonClass  from './_examples/buttonClass/index.jsx'
import Button       from './_examples/Button/index.jsx'
import Sections     from '@/web/page/Sections.jsx'

const ButtonsExamples = () =>
  <div className="prose flow">
    <h1>Buttons</h1>
    <Buttons/>

    <Sections tocName="buttons">
      <ButtonsProp/>
      <Outline/>
      <ClassName/>
      <ButtonClass/>
      <Button/>
    </Sections>
  </div>

export default ButtonsExamples