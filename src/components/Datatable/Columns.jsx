import React    from 'react'
import Context  from './Context.js'
import Dropdown from '@/components/Dropdown/Dropdown.jsx'
import DDContext from '@/components/Dropdown/Context.js'
// import Select   from '@/components/Select/Select.jsx'

const Menu = ({
  menuRef,
  menuClass='columns menu content border bdr-1',
  onMouseEnter,
  onMouseLeave,
}) =>
  <div
    className={menuClass}
    ref={menuRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="item">
      TODO
    </div>
    <div className="item">
      TODO
    </div>
  </div>

const Columns = ({
  setColumns,
}) =>
  <Dropdown
    right
    iconRight="angle-down"
    text='Columns'
    size="small"
    Menu={Menu}
  />


export default Context.Consumer(Columns)