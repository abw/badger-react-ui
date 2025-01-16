import { ModalFooterType } from './types'

const ModalFooter: ModalFooterType = ({
  footer
}) =>
  Boolean(footer) &&
    <footer>
      {footer}
    </footer>

export default ModalFooter