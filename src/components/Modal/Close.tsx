import Icon from '@/components/Icon/Icon'
import { ModalCloseType } from './types'

const ModalClose: ModalCloseType = ({
  close,
  icon='cross',
  className='close'
}) =>
  <div className={className} onClick={close}>
    <Icon name={icon}/>
  </div>

export default ModalClose