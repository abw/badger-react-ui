import React from 'react'
import { Confirm, Warning } from '@/src/index.jsx'

const ConfirmExample = () =>
  /* START */
  <div className="flex gap-4">
    <Confirm
      text="Delete 1"
      color="red"
      modal
    />
    <Confirm
      text="Delete 2"
      color="brown"
      prompt="Are you sure you want to delete this?"
      modal
    />
    <Confirm
      text="Delete 3"
      color="orange"
      title={<h3>You are about to delete something!</h3>}
      prompt="Are you sure you want to do that?"
      modal
    />
    <Confirm
      text="Delete 4"
      color="yellow"
      modalClass="max-width-25rem"
      prompt={
        <Warning
          title="Warning!"
          text="This is forever. You can't undo this."
          icon="exclamation"
          border
        />
      }
      modal
    />
  </div>
  /* END */

export default ConfirmExample