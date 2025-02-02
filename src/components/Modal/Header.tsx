import { ModalHeaderProps } from './types'

const ModalHeader = ({
  title,
  header
}: ModalHeaderProps) =>
  (title || header)
    ? <header>
        { Boolean(title) &&
          <h3>{title}</h3>
        }
        { header }
      </header>
    : null

export default ModalHeader