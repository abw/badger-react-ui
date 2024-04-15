import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      text="Stripe Alert"
      shadow={4}
      stripe
    />
    <Alert
      text="Info Stripe Alert"
      type="info"
      shadow={4}
      stripe
    />
    <Alert
      text="Success Stripe Alert"
      type="success"
      shadow={4}
      stripe
    />
    <Alert
      text="Warning Stripe Alert"
      type="warning"
      shadow={4}
      stripe
    />
    <Alert
      text="Error Stripe Alert"
      type="error"
      shadow={4}
      stripe
    />
  </div>
/* END */

export default Component
