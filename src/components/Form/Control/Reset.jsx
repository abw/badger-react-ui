import React          from 'react'
import DefaultButton  from '@/components/Button/Button.jsx'
import { useForm }    from '@abw/badger-form'
import { Themed }     from '@/src/Theme.jsx'

const Reset = ({
  type='reset',
  text='Reset',
  className='reset',
  Button=DefaultButton,
  ...props
}) => {
  const { reset } = useForm()
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={reset}
      {...props}
    />
  )
}

export default Themed(Reset, 'Reset')