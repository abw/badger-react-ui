import React from 'react'
import { Success } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Success } from '@abw/badger-react-ui'

const SuccessAlert = () =>
  <div>
    <Success text="Success Alert"/>
    <Success text="Success Alert" border/>
    <Success
      headline="Success Alert"
      text="This is a success alert"
      border shadow
    />
  </div>

export default SuccessAlert