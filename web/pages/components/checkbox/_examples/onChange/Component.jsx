import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

const OnChangeExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
  /* END */
  )
}

export default OnChangeExample