import Visible from '@/state/Visible'
import Overlay from './Overlay'
import { OverlayProps } from './types'

const OverlayState = ({
  open=false
} = { }) => {
  const { isVisible, show, hide } = Visible({ visible: open })
  return {
    show,
    hide,
    Overlay:(props: OverlayProps) =>
      isVisible &&
      <Overlay
        {...props}
      />
  }
}

export default OverlayState