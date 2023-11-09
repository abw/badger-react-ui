import React from 'react'
import { Error } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Error } from '@abw/badger-react-ui'

const ErrorAlert = () =>
  <div>
    <Error text="Error Alert"/>
    <Error text="Error Alert" border/>
    <Error
      headline="Error Alert"
      text="This is an error alert"
      border shadow
    />
  </div>

export default ErrorAlert