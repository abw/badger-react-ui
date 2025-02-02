import { Checkbox } from '@/src/index'
import { useState } from 'react'

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