import React          from 'react'
import Search         from './_examples/Search/index.jsx'
import OnSearch       from './_examples/onSearch/index.jsx'
import OnSelect       from './_examples/onSelect/index.jsx'
import DisplayResult  from './_examples/displayResult/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import Clear          from './_examples/clear/index.jsx'
import Reset          from './_examples/reset/index.jsx'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'

const SearchExamples = () =>
  <div className="flow">
    <h1>Search</h1>
    <Search/>
    <Sections tocName="search">
      <Heading title="Properties"/>
      <DisplayResult/>
      <DisplayValue/>
      <Heading title="Event Handlers"/>
      <OnSearch/>
      <OnSelect/>
      <Heading title="Functions"/>
      <Clear/>
      <Reset/>
    </Sections>
  </div>

export default SearchExamples