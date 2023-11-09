import React from 'react'
import Icon from './Icon.jsx'
import { Themed } from '@/src/Theme.jsx'

const WithIcons = props =>
  <>
    {props.icon &&
      <Icon name={props.icon} />
    }
    {props.iconLeft &&
      <Icon
        name={props.iconLeft}
        className={`left on-left ${props.iconLeftClass || ''}`}
        fixedWidth
      />
    }
    {props.text || props.children}
    {props.iconRight &&
      <Icon
        name={props.iconRight}
        className={`right on-right ${props.iconRightClass || ''}`}
        fixedWidth
      />
    }
  </>

export default Themed(WithIcons, 'WithIcons')
