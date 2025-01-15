import React            from 'react'
import Context          from './Context.js'
import DropdownContent  from './Content.jsx'
import { Themed }       from '@/src/Theme'

const Dropdown = ({
  Content=DropdownContent,
  content,
  children,
  ...props
}) =>
  <Context.Provider content={content||children} {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Dropdown, 'Dropdown')

