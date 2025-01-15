import { Themed } from '@/src/Theme'
import { AlertContentType } from './types'

const AlertContent: AlertContentType = ({
  title,
  text,
  children,
}) =>
  <>
    {title && <h3>{title}</h3>}
    {text ? <p>{text}</p> : children}
  </>

const ThemedAlertContent: AlertContentType = Themed(AlertContent, 'AlertContent')
export default ThemedAlertContent

// export default Themed(AlertContent, 'AlertContent') as React.FC<AlertContentProps>