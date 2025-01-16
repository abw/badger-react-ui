import React          from 'react'
import DefaultButton  from '@/components/Button/Button'
import { Themed }     from '@/src/Theme'

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

export default Themed(Cancel, 'Cancel')