import ModalHeader from './Header'
import ModalFooter from './Footer'
import { stopPropagation } from '@/src/utils/events'
import { ModalContentType } from './types'

const ModalContent: ModalContentType = ({
  text,
  children,
  Header=ModalHeader,
  Footer=ModalFooter,
  ...props
}) =>
  <article onClick={stopPropagation}>
    <Header {...props}/>
    {text || children}
    <Footer {...props}/>
  </article>

export default ModalContent