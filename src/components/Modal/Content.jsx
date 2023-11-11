import React       from 'react'
import { Themed }  from '@/src/Theme.jsx'
import ModalHeader from './Header.jsx'
import ModalFooter from './Footer.jsx'

const ModalContent = ({
  text,
  children,
  Header=ModalHeader,
  Footer=ModalFooter,
  ...props
}) =>
  <article>
    <Header {...props}/>
    {text || children}
    <Footer {...props}/>
  </article>

export default Themed(ModalContent, 'ModalContent')