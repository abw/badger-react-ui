import DefaultButton  from '@/components/Button/Button'
import { useForm }    from '@abw/badger-form'
import { Themed }     from '@/src/Theme'
import { ResetProps } from '../types'

const Reset = ({
  type='reset',
  text='Reset',
  className='reset',
  Button=DefaultButton,
  ...props
}: ResetProps) => {
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