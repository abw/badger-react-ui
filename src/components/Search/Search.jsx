import React         from 'react'
import Context       from './Context.js'
import SearchContent from './Content.jsx'
import { Themed }    from '@/src/Theme.jsx'

const Search = ({
  Content=SearchContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Search, 'Search')