import React          from 'react'
import Select         from './_examples/Select/index.jsx'
import Options        from './_examples/options/index.jsx'
import DisplayOption  from './_examples/displayOption/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import Sections       from '@/web/page/Sections.jsx'

const SelectExamples = () =>
  <div className="flow">
    <h1>Select</h1>
    <Select/>
    <Sections tocName="select">
      <Options/>
      <DisplayOption/>
      <DisplayValue/>
    </Sections>
  </div>

export default SelectExamples