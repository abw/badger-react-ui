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

export default AlertContent