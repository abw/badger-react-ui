import React, { useState } from 'react'
import { Modal, Button } from '@/src/index.jsx'

const ModalExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* START */}
      OPEN: {open}
      <Modal
        open={open}
        onClick={() => setOpen(false)}
      >
        <p>
          This is a modal which doesn&apos;t have a close
          button or icon. But you can click anywhere
          outside the dialog to close the modal.
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