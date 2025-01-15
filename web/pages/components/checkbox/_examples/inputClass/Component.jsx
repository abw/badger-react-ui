import { Checkbox } from '@/src/index'
import React, { useState } from 'react'

const ClassName = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      text="I like badgers"
      inputClass="larger"
      checked={checked}
      onChange={setChecked}
    />
    /* END */
  )
}

export default ClassName