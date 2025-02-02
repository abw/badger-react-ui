import ModalHeader from './Header'
import ModalFooter from './Footer'
import { stopPropagation } from '@/src/utils/events'
import { ModalContentProps } from './types'

const ModalContent = ({
  text,
  children,
  Header=ModalHeader,
  Footer=ModalFooter,
  ...props
}: ModalContentProps) =>
  <article onClick={stopPropagation}>
    <Header {...props}/>
    {text || children}
    <Footer {...props}/>
  </article>

export default ModalContent