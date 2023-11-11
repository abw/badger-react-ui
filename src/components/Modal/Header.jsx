import React      from 'react'
import { Themed } from '@/src/Theme.jsx'

const ModalHeader = ({
  title,
  header,
}) =>
  (title || header)
    ? <header>
        { Boolean(title) &&
          <h3>{title}</h3>
        }
        {header}
      </header>
    : null

export default Themed(ModalHeader, 'ModalHeader')