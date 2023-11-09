import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertDismiss = () =>
  <Alert
    headline="Dismissable Alert"
    text="A dismissable alert"
    dismissable
  />

export default AlertDismiss