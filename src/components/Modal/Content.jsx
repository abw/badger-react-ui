import React       from 'react'
import ModalHeader from './Header.jsx'
import ModalFooter from './Footer.jsx'
import { Themed }  from '@/src/Theme.jsx'
import { stopPropagation } from '@/src/utils/events.js'

const ModalContent = ({
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

export default Themed(ModalContent, 'ModalContent')