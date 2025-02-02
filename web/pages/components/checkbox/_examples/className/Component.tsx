import { Checkbox } from '@/src/index'
import { useState } from 'react'

const ClassName = () => {
  const [checked, setChecked] = useState(false)
  return (
    /* START */
    <Checkbox
      text="I like badgers"
      className="large border"
      checked={checked}
      onChange={setChecked}
    />
    /* END */
  )
}

export default ClassName