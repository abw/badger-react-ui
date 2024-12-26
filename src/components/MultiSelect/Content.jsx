import React from 'react'
import Context from './Context.js'
import DefaultOption from './Option.jsx'
import DefaultSelect from '../Select/Select.jsx'
import DefaultSelections from './Selections.jsx'
import DefaultSortSelections from './SortSelections.jsx'
import { doNothing } from '@abw/badger-utils'

const Content = ({
  className='multiselect',
  sortable,
  Option=DefaultOption,
  Select=DefaultSelect,
  Selections=DefaultSelections,
  SortSelections=DefaultSortSelections,
  ...props
}) =>
  <div className={className}>
    <Select
      {...props}
      onUpdate={doNothing}
      displayOption={
        option => <Option option={option}/>
      }
    />
    { sortable
      ? <SortSelections/>
      : <Selections/>
    }
  </div>

export const MultiSelectContent = Context.Consumer(Content)
export default MultiSelectContent
