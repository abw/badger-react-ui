import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

const CheckedTextExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      text="Badger Fans!"
      checkedText="I like badgers (well done!)"
      checked={checked}
      onChange={setChecked}
    />
    /* END */
  )
}

export default CheckedTextExample