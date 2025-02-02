import { ModalFooterProps } from './types'

const ModalFooter = ({
  footer
}: ModalFooterProps) =>
  Boolean(footer) &&
    <footer>
      {footer}
    </footer>

export default ModalFooter