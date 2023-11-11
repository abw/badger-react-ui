import { useState } from 'react'

const VisibleState = ({
  visible=false,
} = { }) => {
  const [isVisible, setVisible] = useState(visible)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)
  return {
    isVisible,
    setVisible,
    show,
    hide
  }
}

export default VisibleState