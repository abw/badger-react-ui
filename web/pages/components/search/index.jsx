import React          from 'react'
import Search         from './_examples/Search/index.jsx'
import OnSearch       from './_examples/OnSearch/index.jsx'
import DisplayResult  from './_examples/DisplayResult/index.jsx'
import DisplayValue   from './_examples/DisplayValue/index.jsx'
import Sections       from '@/web/page/Sections.jsx'

const SearchExamples = () =>
  <div className="flow">
    <h1>Search</h1>
    <Search/>
    <Sections tocName="search">
      <OnSearch/>
      <DisplayResult/>
      <DisplayValue/>
    </Sections>
  </div>

export default SearchExamples