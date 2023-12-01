import React from 'react'
import { Icon as BadgerIcon } from '@abw/badger-icon'
import { sizeColorProps } from '@/src/utils/classes.js'

const Icon = (props) =>
  <BadgerIcon
    {...sizeColorProps(props)}
  />


export default Icon