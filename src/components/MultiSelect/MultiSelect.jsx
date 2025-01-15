import React   from 'react'
import Context from './Context.js'
import MultiSelectContent from './Content.jsx'
import { Themed } from '@/src/Theme'

const MultiSelect = ({
  Content=MultiSelectContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

const ThemedMultiSelect = Themed(MultiSelect, 'MultiSelect')
export default ThemedMultiSelect