import { Checkbox } from '@/src/index'
import { useState } from 'react'

const CheckedExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      text="Turn it on"
      checked={checked}
      onChange={setChecked}
      switch
    />
    /* END */
  )
}

export default CheckedExample