import { Themer } from '@/src/Themer'

type BarProps =
  React.ComponentProps<'div'> &{
  volume: number,
  numpty?: string
}
const Bar = ({
  volume = 10,
  ...props
}: BarProps) =>
  <div {...props}>Volume is {volume}</div>

const ThemedBar = Themer(Bar)
export default ThemedBar
