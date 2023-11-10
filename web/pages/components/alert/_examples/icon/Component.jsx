import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <div>
    <Alert
      icon="circle-info"
      type="info"
      title="Eleven"
      text="It's one louder"
    />
    <Alert
      icon="circle-check"
      type="success"
      title="Eleven"
      text="It's one louder"
    />
    <Alert
      icon="circle-exclamation"
      type="error"
      title="Eleven"
      text="It's one louder"
    />
  </div>
/* END */

export default Component
