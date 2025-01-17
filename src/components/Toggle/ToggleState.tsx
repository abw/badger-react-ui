import useToggle from './useToggle'
import { ToggleProps } from './types'

const ToggleState = (props: ToggleProps) => {
  const [ , Toggle] = useToggle(props)
  return <Toggle/>
}

export default ToggleState