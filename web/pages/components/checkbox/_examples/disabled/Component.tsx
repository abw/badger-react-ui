import { Checkbox } from '@/src/index'
import { useState } from 'react'

const DisabledExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      disabled
      text="I like badgers"
      checked={checked}
      onChange={setChecked}
    />
    /* END */
  )
}

export default DisabledExample