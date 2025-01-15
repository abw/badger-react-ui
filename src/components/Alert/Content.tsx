import { AlertContentType } from './types'
// import { Themed }    from '@/src/Theme'

const AlertContent: AlertContentType = ({
  title,
  text,
  children,
}) =>
  <>
    {title && <h3>{title}</h3>}
    {text ? <p>{text}</p> : children}
  </>

// export default Themed(AlertContent)
export default AlertContent