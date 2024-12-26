import React from 'react'
import { Icon as BadgerIcon } from '@abw/badger-icon'
import { sizeColorProps } from '@/src/utils/classes.js'
import { Themed } from '@/src/Theme.jsx'

const Icon = (props) =>
  <BadgerIcon
    {...sizeColorProps(props)}
  />

export default Themed(Icon, 'Icon')