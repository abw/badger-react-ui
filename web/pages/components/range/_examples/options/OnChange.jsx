import React from 'react'
import { Range } from '@/src/index.jsx'

/* START */
const RangeExample = () => {
  const [values, setValues] = React.useState({ })
  return (
    <div>
      <Range
        values={[
          0, 25, 50, 100, 200, 300, 400, 500, 1000,
        ]}
        onChange={
          (min, max) => setValues({ min, max })
        }
      />
      <pre>
        Values: { JSON.stringify(values)}
      </pre>
    </div>
  )
}
/* END */

export default RangeExample