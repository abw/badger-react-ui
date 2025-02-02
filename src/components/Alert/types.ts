export type AlertProps = {
  type?: string,
  size?: string,
  color?: string,
  compact?: boolean,
  stripe?: boolean,
  border?: boolean | number | string,
  radius?: boolean | number | string,
  shadow?: boolean | number | string,
  className?: string,
  alertClass?: string
  revealed?: boolean,
  onDismiss?: () => void,
  Headline?: AlertHeadlineComponent,
  Icon?: AlertIconComponent,
} & AlertContentProps
  & AlertControlsProps
  & Partial<AlertHeadlineProps>
  & Partial<AlertIconProps>

export type AlertContentProps = {
  title?: string,
  text?: string,
  children?: React.ReactNode
}

export type AlertControlsProps = {
  dismissable?: boolean,
  revealable?: boolean,
  isRevealed?: boolean,
  dismiss?: (flag: boolean) => void,
  openIcon?: string,
  closedIcon?: string,
  dismissIcon?: string,
}

export type AlertHeadlineProps = {
  headline: React.ReactNode,
  headIcon?: string,
  headicon?: string,
  revealable?: boolean,
  toggle?: () => void,
  controlProps: AlertControlsProps,
  Controls: AlertControlsComponent
}

export type AlertIconProps = {
  icon: string,
  Content?: AlertContentComponent
} & AlertContentProps

// export type AlertType = React.FC<AlertProps>
export type AlertContentComponent = React.FC<AlertContentProps>
export type AlertControlsComponent = React.FC<AlertControlsProps>
export type AlertHeadlineComponent = React.FC<AlertHeadlineProps>
export type AlertIconComponent = React.FC<AlertIconProps>
