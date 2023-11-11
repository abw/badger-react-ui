import React      from 'react'
import { Themed } from '@/src/Theme.jsx'

const AlertContent = ({
  title,
  text,
  children,
}) =>
  <>
    {title && <h3>{title}</h3>}
    {text ? <p>{text}</p> : children}
  </>

export default Themed(AlertContent, 'AlertContext')