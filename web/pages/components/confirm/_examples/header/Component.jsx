import React from 'react'
import { Confirm } from '@/src/index.jsx'

const ConfirmExample = () =>
  /* START */
  <Confirm
    text="Delete 3"
    color="orange"
    modal
    header={
      <>
        <h3>You are about to delete something!</h3>
        <div className="small">Think very carefully...</div>
      </>
    }
  />
  /* END */

export default ConfirmExample