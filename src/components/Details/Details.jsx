import React            from 'react'
import Context          from './Context.js'
import DetailsContainer from './Container.jsx'
import NativeContainer  from './Native/Container.jsx'
import { Themed }       from '@/src/Theme.jsx'

const defaults = {
  iconLeft: 'angle-right',
  iconLeftRotate: 90,
  iconRightRotate: -90,
}

const Details = ({
  native,
  Container = native
    ? NativeContainer
    : DetailsContainer,
  ...props
}) =>
  <Context.Provider>
    <Container {...defaults} {...props}/>
  </Context.Provider>

export default Themed(Details, 'Details')

