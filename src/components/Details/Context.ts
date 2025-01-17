import React from 'react'
import { Generator } from '@abw/react-context'
import { DetailsContextProps, DetailsContextRenderProps } from './types'

const DetailsContext = Generator<DetailsContextProps, DetailsContextRenderProps>(
  ({
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
)

export const useDetails = DetailsContext.Use
export default DetailsContext
