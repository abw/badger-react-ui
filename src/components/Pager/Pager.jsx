import React        from 'react'
import Context      from './Context.js'
import PagerContent from './Content.jsx'
import { Themed }   from '@/src/Theme.jsx'

const Pager = ({
  Content=PagerContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Pager, 'Pager')

