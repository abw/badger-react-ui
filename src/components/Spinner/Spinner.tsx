import Icon from '@/components/Icon/Icon'
import { classes } from '@/src/utils/classes'
import { Themed }    from '@/src/Theme'
import { SpinnerProps } from './types'
import { iconFill, iconParts, iconStroke } from './Utils'

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
  fast=false,
  slow=false,
  speed=fast ? 'fast' : slow ? 'slow' : null,
  animation=reverse ? 'spin.reverse' : 'spin',
}: SpinnerProps) => {
  const cname = classes(
    size, className,
  )
  const bgMods: string[] = [ ]
  const bgClasses = [ bgColor ]
  const fgMods: string[] = [ ]
  const fgClasses: Array<string | null> = [ color, animation, speed ]

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