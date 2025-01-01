import React from 'react'
import { Icon as BadgerIcon } from '@abw/badger-icon'
import { sizeColorProps } from '@/src/utils/classes'
import { Themed } from '@/src/Theme'
import { IconProps, ThemedIconType } from './types.js'

const Icon: React.FC<IconProps> = (props) =>
  <BadgerIcon
    {...sizeColorProps(props)}
  />

// export default Themed(Icon, 'Icon')
const ThemedIcon: ThemedIconType = Themed(Icon, 'Icon')

export default ThemedIcon