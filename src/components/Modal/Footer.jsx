import React      from 'react'
import { Themed } from '@/src/Theme'

const ModalFooter = ({
  footer,
}) =>
  Boolean(footer) &&
    <footer>
      {footer}
    </footer>

export default Themed(ModalFooter, 'ModalFooter')