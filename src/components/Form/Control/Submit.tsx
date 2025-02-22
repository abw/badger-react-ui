import DefaultButton  from '@/components/Button/Button'
import { useForm }    from '@abw/badger-form'
import { Themed }     from '@/src/Theme'
import { SubmitProps } from '../types'

const Submit = ({
  type='submit',
  text='Submit',
  className='submit',
  Button=DefaultButton,
  ...props
}: SubmitProps) => {
  const { submit, status } = useForm()
  return (
    <Button
      type={type}
      text={text}
      className={className}
      onClick={submit}
      disabled={status.submitting}
      {...props}
    />
  )
}

export default Themed(Submit, 'Submit')