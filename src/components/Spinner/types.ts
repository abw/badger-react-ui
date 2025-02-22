export type SpinnerProps = {
  size?: string
  className?: string
  icon?: string
  color?: string
  stroke?: boolean | string
  strokeWidth?: string | number
  strokeStop?: string | number
  strokeStopDark?: string | number
  fill?: boolean
  fillStop?: string | number
  fillStopDark?: string | number
  bgIcon?: boolean | string
  bgColor?: string
  bgStroke?: boolean | string
  bgStrokeWidth?: string | number
  bgStrokeStop?: string | number
  bgStrokeStopDark?: string | number
  bgFill?: boolean
  bgFillStop?: string | number
  bgFillStopDark?: string | number
  shrink?: string | number
  reverse?: boolean
  fast?: boolean
  slow?: boolean
  speed?: string | null
  animation?: string
}

export type SpinnerComponent = React.FC<SpinnerProps>