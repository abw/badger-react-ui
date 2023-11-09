import React from 'react'
import { Warning } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Warning } from '@abw/badger-react-ui'

const WarningAlert = () =>
  <div>
    <Warning text="Warning Alert"/>
    <Warning text="Warning Alert" border/>
    <Warning
      headline="Warning Alert"
      text="This is a warning alert"
      border shadow
    />
  </div>

export default WarningAlert