import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const ClassName = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      border
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
  )
}
/* END */

export default ClassName