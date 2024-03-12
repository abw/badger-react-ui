import React          from 'react'
import DefaultButton  from '@/components/Button/Button.jsx'
import { useForm }    from '@abw/badger-form'
// import { Themed } from '../Theme.jsx'

const Submit = ({
  type='submit',
  text='Submit',
  className='submit',
  Button=DefaultButton,
  ...props
}) => {
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

export default Submit
// export default Themed(Submit, 'Form.Submit')