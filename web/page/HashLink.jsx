import React from 'react'
import { idSafe } from '../utils/Misc.js'

const HashLink = ({
  id, text,
}) =>
  <a href={`#${idSafe(id || text)}`} className="code">{text}</a>

export default HashLink