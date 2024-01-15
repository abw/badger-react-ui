import React    from 'react'
import Context  from '../Context.js'
import Menu     from './Menu.jsx'
import Dropdown from '@/components/Dropdown/Dropdown.jsx'

const Columns = ({
  setColumns,
}) =>
  <div className="columns">
    <Dropdown
      right
      iconRight="angle-down"
      text='Columns'
      size="small"
      Menu={Menu}
      closeOnSelect={false}
      debug
      // onLoad={that => that.open()}
    />
  </div>

export default Context.Consumer(Columns)