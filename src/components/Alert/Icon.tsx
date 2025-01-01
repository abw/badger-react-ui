import AlertContent from './Content.jsx'
import Icon         from '@/src/components/Icon/Icon.js'
import { Themed }   from '@/src/Theme.jsx'
import { AlertIconType } from './types.js'

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