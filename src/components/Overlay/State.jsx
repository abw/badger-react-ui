import React    from 'react'
import Visible  from '@/state/Visible'
import Overlay  from './Overlay.jsx'

const OverlayState = ({
  open=false
} = { }) => {
  const { isVisible, show, hide } = Visible({ visible: open })
  return {
    show,
    hide,
    Overlay: props =>
      isVisible &&
      <Overlay
        {...props}
      />
  }
}

export default OverlayState