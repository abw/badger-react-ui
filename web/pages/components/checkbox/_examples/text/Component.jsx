import { Checkbox } from '@/src/index.jsx'
import React, { useState } from 'react'

const TextExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      text="Badger are the best!"
      checked={checked}
      onChange={setChecked}
    />
    /* END */
  )
}

export default TextExample