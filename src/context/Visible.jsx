import { Generator } from '@abw/react-context'
import VisibleState  from '@/state/Visible.jsx'

const VisibleContext = ({
  render,
  ...props
}) => {
  const { isVisible, setVisible, show, hide } = VisibleState(props)
  return render({
    isVisible,
    setVisible,
    show,
    hide
  })
}

export default Generator(VisibleContext)