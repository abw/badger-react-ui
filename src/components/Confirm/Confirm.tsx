import Buttons    from '@/components/Buttons/Buttons'
import Visible    from '@/state/Visible'
import Modal      from './Modal'
import { Themed } from '@/src/Theme'
import { ConfirmType } from './types'

const Confirm: ConfirmType = ({
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
  modal,
  modalClass,
  onClick = () => window.alert('No confirm action defined'),
  ...props
}) => {
  const { isVisible, hide, show } = Visible({ visible: open })
  const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  return modal
    /* v8 ignore start */
    ? <>
        <Buttons
          className={className}
          buttonClass={buttonClass}
          buttons={[ { ...props, onClick: show } ]}
        />
        <Modal
          isVisible={isVisible}
          confirm={confirmProps}
          cancel={cancelProps}
          modalClass={modalClass}
          {...props}
        />
      </>
    /* v8 ignore end */
    : <Buttons
        className={className}
        buttonClass={buttonClass}
        buttons={
          isVisible
            ? [ cancelProps, confirmProps ]
            : [ { ...props, onClick: show }]
        }
      />
}

export default Themed(Confirm, 'Confirm')
