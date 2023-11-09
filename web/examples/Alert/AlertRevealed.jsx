import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertRevealed = () =>
  <Alert
    headline="Revealed Alert"
    text="A revealed alert"
    revealable
    revealed
  />

export default AlertRevealed