import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

const ClassName = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      border
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
    /* END */
  )
}

export default ClassName