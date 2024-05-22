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
        maxHeight="100px"
      >
        He exploded on stage. Just like that, he just went up. He just was
        like a flash of green light and that was it, nothing was left. Well,
        there was a little green globule on his drum seat. Like a stain,
        really. It was a small stain, a globule, actually, and, you know
        several dozens of people spontaneously combust each year, it's just
        not really widely reported.
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