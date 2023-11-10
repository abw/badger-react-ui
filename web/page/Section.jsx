import React from 'react'
import { idSafe } from '../utils/Misc.js'

const Section = ({
  id,
  code,
  // title=<code>{code}</code>,
  title=code,
  children,
}) =>
  <section id={idSafe(id || code || title)}>
    <h2 className={code ? 'font-mono' : ''}>{title}</h2>
    {children}
  </section>

export default Section