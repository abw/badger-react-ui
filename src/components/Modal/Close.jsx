import React from 'react'
import Icon from '@/components/Icon/Icon'
import { Themed } from '@/src/Theme'

const ModalClose = ({
  close,
  icon='cross',
  className='close'
}) =>
  <div className={className} onClick={close}>
    <Icon name={icon}/>
  </div>

export default Themed(ModalClose, 'ModalClose')