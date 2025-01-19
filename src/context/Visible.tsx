import { Generator } from '@abw/react-context'
import VisibleState  from '@/state/Visible'

export type VisibleContextProps = {
  visible?: boolean
}

export const VisibleContext = Generator<
  VisibleContextProps,
  ReturnType<typeof VisibleState>
>(
  ({
    render,
    visible
  }) => {
    const { isVisible, setVisible, show, hide } = VisibleState({ visible })
    return render({
      isVisible,
      setVisible,
      show,
      hide
    })
  }
)

export const {
  Provider: VisibleProvider,
  Consumer: VisibleConsumer,
  Use: useVisible
} = VisibleContext

export default VisibleContext