import React from 'react'
import Icon from '@/components/Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'
import { isBoolean } from '@abw/badger-utils'
import { Themed }    from '@/src/Theme.jsx'

const iconParts = (mods, classes) =>
  [
    mods.length
      ? '-' + mods.join('-')
      : '',
    classes.length
      ? '.' + classes.join('.')
      : ''
  ].join('')

const iconStroke = (mods, classes, stroke, width, light, dark) => {
  if (stroke) {
    classes.push(`stc-${light}`, `std-${dark}`)
    if (! isBoolean(stroke)) {
      mods.push(stroke)
    }
    else if (width) {
      mods.push(`strokeWidth=${width}`)
    }
  }
  else {
    mods.push('stroke=none')
  }
}

const iconFill = (mods, classes, fill, light, dark) => {
  if (fill) {
    classes.push(`flc-${light}`, `fld-${dark}`)
  }
  else {
    mods.push('fill=none')
  }
}

const Spinner = ({
  size,
  className,
  icon='cog',
  color='brand',
  stroke=true,
  strokeWidth,
  strokeStop=40,
  strokeStopDark=50,
  fill=false,
  fillStop=50,
  fillStopDark=20,
  // bgIcon='circle',
  bgIcon=false,
  bgColor=color,
  bgStroke=false,
  bgStrokeWidth,
  bgStrokeStop=60,
  bgStrokeStopDark=70,
  bgFill=true,
  bgFillStop=70,
  bgFillStopDark=30,
  shrink=bgIcon ? 5 : 0,
  reverse=false,
  animation=reverse ? 'spin.reverse' : 'spin',
}) => {
  const cname = classes(
    size, className,
  )
  const bgMods = [ ]
  const bgClasses = [ bgColor ]
  const fgMods = [ ]
  const fgClasses = [ color, animation ]

  iconStroke(bgMods, bgClasses, bgStroke, bgStrokeWidth, bgStrokeStop, bgStrokeStopDark)
  iconStroke(fgMods, fgClasses, stroke, strokeWidth, strokeStop, strokeStopDark)
  iconFill(bgMods, bgClasses, bgFill, bgFillStop, bgFillStopDark)
  iconFill(fgMods, fgClasses, fill, fillStop, fillStopDark)

  if (shrink) {
    fgMods.push(`shrink=${shrink}`)
  }

  const bgName  = bgIcon ? `${bgIcon}${iconParts(bgMods, bgClasses)}` : ''
  const fgName  = `${icon}${iconParts(fgMods, fgClasses)}`
  const name    = bgIcon ? `${bgName} ${fgName}` : fgName
  return (
    <Icon name={name} className={cname}/>
  )
}


export default Themed(Spinner, 'Spinner')