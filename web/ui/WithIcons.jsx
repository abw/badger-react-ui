import React from 'react'
import Icon from './Icon.jsx'

// WEB!

const Content = props =>
  <>
    {props.icon &&
      <Icon name={props.icon} />
    }
    {props.iconLeft &&
      <Icon name={props.iconLeft} fixedWidth className={`left on-left ${props.iconLeftClass || ''}`} />
    }
    {props.text || props.children}
    {props.iconRight &&
      <Icon name={props.iconRight} fixedWidth className={`right on-right ${props.iconRightClass || ''}`} />
    }
  </>

export default Content
