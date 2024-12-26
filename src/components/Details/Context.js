import React from 'react'
import { Generator } from '@abw/react-context'

const Context = ({
  render,
  open: initiallyOpen,
}) => {
  const [isOpen, setOpen] = React.useState(initiallyOpen)
  const toggleOpen = () => setOpen( open => ! open )
  const open       = () => setOpen(true)
  const close      = () => setOpen(false)

  // handle external updates to open/initiallyOpen
  React.useEffect(
    () => {
      setOpen(initiallyOpen)
    },
    [initiallyOpen]
  )

  return render({
    isOpen, open, close, toggleOpen,
  })
}

const generated = Generator(Context)
export const useDetails = generated.Use
export default generated
