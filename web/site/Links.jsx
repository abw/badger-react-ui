import React from 'react'
import Link from '@/ui/Link.jsx'

// eslint-disable-next-line react/display-name
export const CodeLink = (to, text) => (props={}) =>
  <Link to={to} className="code" {...props}>{text}</Link>

export const ButtonLink = CodeLink('/components/button', 'Button')
export const ButtonsLink = CodeLink('/components/buttons', 'Buttons')
export const IconLink = CodeLink('/components/icon', 'Icon')