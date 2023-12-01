import React         from 'react'
import Context       from './Context.js'
import SelectInput   from './Input.jsx'
import SelectOptions from './Options.jsx'
import { classes } from '@/src/utils/classes.js'
// import { Themed }   from '@/src/Theme.jsx'

const Content = ({
  onKeyDown,
  selecting,
  selectClass='select',
  selectingClass='selecting',
  Input=SelectInput,
  Options=SelectOptions,
  // ...props
}) =>
  <div
    className={classes(selectClass, { [selectingClass]: selecting})}
    onKeyDown={onKeyDown}
  >
    <Input/>
    { Boolean(selecting) &&
      <Options/>
    }
  </div>

export default Context.Consumer(Content)
