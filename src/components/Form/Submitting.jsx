import React          from 'react'
import Overlay        from '../Overlay/Overlay'
import DefaultSpinner from '../Spinner/Spinner.jsx'
import { Status }     from '@abw/badger-form'
import { classes }    from '@/src/utils/classes'
import { Themed }     from '@/src/Theme'

const Submitting = ({
  text='Submitting...',
  size='largest',
  className='flex middle center pad-8',
  light, dark, fixed,
  spinnerSize='x4',
  Spinner=DefaultSpinner,
  ...props
}) =>
  <Status submitting>
    <Overlay
      className={classes(className, size)}
      light={light} dark={dark} fixed={fixed}
    >
      <div className="text-center">
        { Spinner &&
          <Spinner size={spinnerSize} {...props}/>
        }
        <div className="mar-t-4">
          {text}
        </div>
      </div>
    </Overlay>
  </Status>

export default Themed(Submitting, 'Submitting')

