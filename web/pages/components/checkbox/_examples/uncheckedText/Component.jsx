import { Checkbox } from '@/src/index'
import React, { useState } from 'react'

const CheckedTextExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      text="Badger Fans!"
      uncheckedText="Click Here"
      checked={checked}
      onChange={setChecked}
    />
    /* END */
  )
}

export default CheckedTextExample