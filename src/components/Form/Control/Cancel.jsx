import React          from 'react'
import DefaultButton  from '@/components/Button/Button.jsx'

const Cancel = ({
  text='Cancel',
  className='cancel',
  Button=DefaultButton,
  ...props
}) =>
  <Button
    text={text}
    className={className}
    {...props}
  />

export default Cancel
// export default Themed(Cancel, 'Cancel')