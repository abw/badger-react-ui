import { Checkbox } from '@/src/index'
import { useState } from 'react'

const CheckedExample = () => {
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

export default CheckedExample