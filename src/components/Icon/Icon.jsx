// NOTE: This is legacy code which is in the process of being moved out to
// a separate @abw/badger-icon module
import React              from 'react'
import IconData           from './IconData.jsx'
import { Themed }         from '@/src/Theme.jsx'
import { fail, isString } from '@abw/badger-utils'

// TODO: fixedWidth

export const DEFAULT_WIDTH  = 512
export const DEFAULT_HEIGHT = DEFAULT_WIDTH

export const Icon = ({
  name,
  iconData=IconData,
  ...props
}) =>
  name
    ? <IconSVG {...props} {...getIconData(name, iconData)}/>
    : <IconSVG {...props}/>

export const getIconData = (name, iconData) => {
  const data = iconData[name]
    || fail(`Invalid icon name: ${name}`)
  return isString(data)
    ? {
        path: data,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      }
    : data
}

export const IconSVG = ({
  path,
  onClick,
  width=DEFAULT_WIDTH,
  height=DEFAULT_HEIGHT,
  style,
  className='',
  fill='currentColor'
}) =>
  <svg
    aria-hidden="true" focusable="false"
    className={`${className} icon`} style={style}
    role="img" xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width} ${height}`}
    onClick={onClick}
  >
    <path d={path} fill={fill}/>
  </svg>

export default Themed(Icon, 'Icon')
