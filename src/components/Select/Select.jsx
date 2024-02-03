import React         from 'react'
import Context       from './Context.js'
import SelectContent from './Content.jsx'
import { Themed }    from '@/src/Theme.jsx'

const Select = ({
  Content=SelectContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

const ThemedSelect = Themed(Select, 'Select')
export default ThemedSelect