import DefaultButton from '@/components/Button/Button'
import { Themed }    from '@/src/Theme'
import { ButtonsProps } from './types'

const Buttons = ({
  buttons,
  children,
  className='buttons',
  buttonClass,
  Button=DefaultButton,
  ...props
}: ButtonsProps) =>
  <div className={className}>
    { buttons
      ? buttons.map(
        (button, n) =>
          <Button
            key={n}
            className={buttonClass}
            { ...props  }
            { ...button }
          />
      )
      : children
    }
  </div>

const ThemedButtons = Themed(Buttons, 'Buttons')
export default ThemedButtons
