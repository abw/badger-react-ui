import { ModalHeaderType } from './types'

const ModalHeader: ModalHeaderType = ({
  title,
  header
}) =>
  (title || header)
    ? <header>
        { Boolean(title) &&
          <h3>{title}</h3>
        }
        { header }
      </header>
    : null

export default ModalHeader