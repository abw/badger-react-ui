import { useState } from 'react'

export const VisibleState = ({
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