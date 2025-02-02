import { AlertContentProps } from './types'

const AlertContent = ({
  title,
  text,
  children,
}: AlertContentProps) =>
  <>
    {title && <h3>{title}</h3>}
    {text ? <p>{text}</p> : children}
  </>

export default AlertContent