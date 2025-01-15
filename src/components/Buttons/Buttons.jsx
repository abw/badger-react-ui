import React          from 'react'
import DefaultButton  from '@/components/Button/Button.jsx'
import { Themed }     from '@/src/Theme'

const Buttons = ({
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
