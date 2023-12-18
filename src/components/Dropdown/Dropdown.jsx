import React            from 'react'
import Context          from './Context.js'
import DropdownContent  from './Content.jsx'
import { Themed }       from '@/src/Theme.jsx'

const Dropdown = ({
  Content=DropdownContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Dropdown, 'Dropdown')

