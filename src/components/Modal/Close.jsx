import React from 'react'
import Icon from '@/components/Icon/Icon.jsx'
import { Themed } from '@/src/Theme.jsx'

const ModalClose = ({
  close,
  icon='cross',
  className='close'
}) =>
  <div className={className} onClick={close}>
    <Icon name={icon}/>
  </div>

export default Themed(ModalClose, 'ModalClose')