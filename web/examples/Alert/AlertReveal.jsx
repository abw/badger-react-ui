import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertReveal = () =>
  <Alert
    headline="Revealable Alert"
    text="A revealable alert"
    revealable
  />

export default AlertReveal