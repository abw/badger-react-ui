import Icon from '@/components/Icon/Icon'
import { ModalCloseProps } from './types'

const ModalClose = ({
  close,
  icon='cross',
  className='close'
}: ModalCloseProps) =>
  <div className={className} onClick={close}>
    <Icon name={icon}/>
  </div>

export default ModalClose