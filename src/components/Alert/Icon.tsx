import AlertContent from './Content.jsx'
import Icon         from '@/src/components/Icon/Icon'
import { AlertIconProps } from './types'

const AlertIcon = ({
  icon,
  Content=AlertContent,
  ...props
}: AlertIconProps) =>
  <div className="side-icon">
    <Icon name={icon}/>
    <div className="wide">
      <Content {...props}/>
    </div>
  </div>

export default AlertIcon