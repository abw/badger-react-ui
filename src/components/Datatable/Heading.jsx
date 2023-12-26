import React   from 'react'
import Context from './Context.js'
import Icon  from '@/components/Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'

export const Heading = ({
  name,
  column,
  sortColumn,
  sortReverse,
  toggleSortColumn,
  sortUpIcon='arrow-up',
  sortDownIcon='arrow-down',
  headingClass='heading',
}) => {
  const sorting = name === sortColumn
  const reverse = sorting && sortReverse
  return (
    <th
      className={ classes( headingClass, { sorting } )}
      onClick={() => toggleSortColumn(name)}
    >
      <div className="flex space middle">
        <span className="label">{column.label}</span>
        { sorting &&
          <Icon name={reverse ? sortUpIcon : sortDownIcon}/>
        }
      </div>
    </th>
  )
}

export default Context.Consumer(Heading)
