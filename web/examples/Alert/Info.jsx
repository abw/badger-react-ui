import React from 'react'
import { Info } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Info } from '@abw/badger-react-ui'

const InfoAlert = () =>
  <div>
    <Info text="Info Alert"/>
    <Info text="Info Alert" border/>
    <Info
      headline="Info Alert"
      text="This is an info alert"
      border shadow
    />
  </div>

export default InfoAlert