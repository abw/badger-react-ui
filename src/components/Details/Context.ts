import React from 'react'
import { Model } from '@abw/react-model'
import { DetailsContextProps, DetailsContextRenderProps } from './types'

const DetailsContext = Model<DetailsContextProps, DetailsContextRenderProps>(
  ({
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

    return {
      isOpen, open, close, toggleOpen,
    }
  }
)

export const {
  Provider: DetailsProvider,
  Consumer: DetailsConsumer,
  Use: useDetails
} = DetailsContext

export default DetailsContext
