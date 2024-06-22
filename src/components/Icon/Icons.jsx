import React from 'react'
import { Icons as BadgerIcons } from '@abw/badger-icon'
import { sizeColorProps } from '@/src/utils/classes.js'
import { Themed } from '@/src/Theme.jsx'

const Icons = (props) =>
  <BadgerIcons
    {...sizeColorProps(props)}
  />

export default Themed(Icons, 'Icons')