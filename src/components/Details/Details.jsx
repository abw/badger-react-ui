import React            from 'react'
import Context          from './Context.js'
import DetailsContainer from './Container.jsx'
import NativeContainer  from './Native/Container.jsx'
import { Themed }       from '@/src/Theme'

const defaults = {
  iconLeft: 'angle-right',
  iconLeftRotate: 90,
  iconRightRotate: -90,
}

const Details = ({
  native,
  open,
  Container = native
    ? NativeContainer
    : DetailsContainer,
  ...props
}) =>
  <Context.Provider open={open}>
    <Container {...defaults} {...props}/>
  </Context.Provider>

export default Themed(Details, 'Details')

