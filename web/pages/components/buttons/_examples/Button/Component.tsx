import { ButtonProps, Buttons } from '@/src/index'

{/* START */}
// PRETEND: import { Buttons, ButtonProps } from '@abw/badger-react-ui'

const MyButton = ({ text }: ButtonProps) =>
  <span className="border pad pad-h-4 mar">
    {text}
  </span>

const ButtonsExample = () =>
  <Buttons
    buttons={[
      { text: 'One' },
      { text: 'Two' },
    ]}
    Button={MyButton}
  />

export default ButtonsExample
