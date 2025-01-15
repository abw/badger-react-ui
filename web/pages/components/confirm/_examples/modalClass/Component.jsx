import React from 'react'
import { Confirm, Warning } from '@/src/index'

const ConfirmExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    modal
    modalClass="max-width-25rem"
    prompt={
      <Warning
        title="Warning!"
        text="This is forever (and that's a mighty long time). You can't undo this."
        icon="exclamation"
        border
      />
    }
  />
  /* END */

export default ConfirmExample