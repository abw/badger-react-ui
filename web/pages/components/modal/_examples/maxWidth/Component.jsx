/* eslint-disable react/no-unescaped-entities */
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
        maxWidth="16ch"
      >
        How do you know it was mixed wrong? So your judgement is that it was
        mixed wrong. I mean it's like it's me saying, you know, you're using
        the wrong conditioner for your hair.
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