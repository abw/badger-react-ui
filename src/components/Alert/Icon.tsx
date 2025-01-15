import AlertContent from './Content.jsx'
import Icon         from '@/src/components/Icon/Icon'
import { Themed }   from '@/src/Theme'
import { AlertIconType } from './types'

const AlertIcon: AlertIconType = ({
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