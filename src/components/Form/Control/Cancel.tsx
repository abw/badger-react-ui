import DefaultButton  from '@/components/Button/Button'
import { Themed }     from '@/src/Theme'
import { CancelProps } from '../types'

const Cancel = ({
  text='Cancel',
  className='cancel',
  Button=DefaultButton,
  ...props
}: CancelProps) =>
  <Button
    text={text}
    className={className}
    {...props}
  />

export default Themed(Cancel, 'Cancel')