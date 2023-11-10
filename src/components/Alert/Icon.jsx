import React        from 'react'
import AlertContent from './Content.jsx'
import Icon         from '../Icon/Icon.jsx'
import { Themed }   from '@/src/Theme.jsx'

const AlertIcon = ({
  icon,
  Content=AlertContent,
  ...props
}) =>
  <div className="side-icon">
    <Icon name={icon}/>
    <div className="wide">
      <Content {...props}/>
    </div>
  </div>

export default Themed(AlertIcon, 'AlertIcon')