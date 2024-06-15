import React from 'react'
import Context from './Context.js'
import DefaultOption from './Option.jsx'
import DefaultSelect from '../Select/Select.jsx'
import DefaultSelections from './Selections.jsx'

const Content = ({
  className='multiselect',
  Option=DefaultOption,
  Select=DefaultSelect,
  Selections=DefaultSelections,
  ...props
}) =>
  <div className={className}>
    <Select
      {...props}
      displayOption={
        option => <Option option={option}/>
      }
    />
    <Selections/>
  </div>

export const MultiSelectContent = Context.Consumer(Content)
export default MultiSelectContent
