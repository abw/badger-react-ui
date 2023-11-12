import React      from 'react'
import Buttons    from '@/components/Buttons/Buttons.jsx'
import Visible    from '@/state/Visible.jsx'
import { Themed } from '@/src/Theme.jsx'

const Confirm = ({
  initiallyRevealed=false,
  open=initiallyRevealed,
  confirmIcon='check',
  confirmText='Confirm',
  confirmColor='red',
  confirmClass,
  cancelIcon='cross',
  cancelText='Cancel',
  cancelColor='grey',
  cancelClass,
  confirm={
    iconRight:  confirmIcon,
    text:       confirmText,
    color:      confirmColor,
    className:  confirmClass
  },
  cancel={
    iconLeft:   cancelIcon,
    text:       cancelText,
    color:      cancelColor,
    className:  cancelClass
  },
  // prompt,
  buttonsClass,
  className=buttonsClass,
  buttonClass,
  onClick = () => window.alert('No confirm action defined'),
  ...props
}) => {
  const { isVisible, hide, show } = Visible({ visible: open })
  const onConfirm = e => {
    e.preventDefault()
    hide()
    onClick()
  }

  const confirmProps = {
    iconRight:  confirmIcon,
    text:       confirmText,
    color:      confirmColor,
    className:  confirmClass,
    ...confirm,
    onClick:    onConfirm,
  }

  const cancelProps = {
    iconLeft:   cancelIcon,
    text:       cancelText,
    color:      cancelColor,
    className:  cancelClass,
    outline:    true,
    ...cancel,
    onClick:    hide,
  }

  return (
    <Buttons
      className={className}
      buttonClass={buttonClass}
      buttons={
        isVisible
          ? [ cancelProps, confirmProps ]
          : [ { ...props, onClick: show }]
      }
    />
  )
}

export default Themed(Confirm, 'Confirm')
