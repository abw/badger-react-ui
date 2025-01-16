import DefaultButton   from '@/components/Button/Button'
import { Themed }      from '@/src/Theme'
import { ButtonsType } from './types'

const Buttons: ButtonsType = ({
  buttons,
  children,
  className='buttons',
  buttonClass,
  Button=DefaultButton,
  ...props
}) =>
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

export default Themed(Buttons, 'Buttons')
