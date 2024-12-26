import React, { useState } from 'react'
import { Modal, Button } from '@/src/index.jsx'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      <Modal
        open={open}
        close={() => setOpen(false)}
        closeOnClick
      >
        <p>
          This is a modal with a close button.
          You can also click anywhere outside
          the dialog to close the modal.
        </p>
        <Button
          text="Say Hello"
          color="green"
          onClick={() => alert('Hello World!')}
        />
      </Modal>
      {/* END */}

      <Button
        color="green"
        text="Open Modal"
        onClick={() => setOpen(true)}
      />
    </>
  )
}

export default ModalExample