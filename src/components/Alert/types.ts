export interface AlertProps extends
  AlertContentProps,
  AlertControlsProps,
  Partial<AlertHeadlineProps>,
  Partial<AlertIconProps>
{
  type?: string,
  size?: string,
  color?: string,
  compact?: boolean,
  stripe?: boolean,
  border?: boolean | number | string,
  radius?: boolean | number | string,
  shadow?: boolean | number | string,
  className?: string,
  revealed?: boolean,
  onDismiss?: () => void,
  Headline?: AlertHeadlineType,
  Icon?: AlertIconType,
}

export interface AlertContentProps {
  title?: string,
  text?: string,
  children?: React.ReactNode
}

export interface AlertControlsProps {
  dismissable?: boolean,
  revealable?: boolean,
  isRevealed?: boolean,
  dismiss?: (flag: boolean) => void,
  openIcon?: string,
  closedIcon?: string,
  dismissIcon?: string,
}

export interface AlertHeadlineProps {
  headline: React.ReactNode,
  headIcon?: string,
  headicon?: string,
  revealable?: boolean,
  toggle?: () => void,
  controlProps: AlertControlsProps,
  Controls: AlertControlsType
}

export interface AlertIconProps extends AlertContentProps {
  icon: string,
  Content?: AlertContentType
}

export type AlertType = React.FC<AlertProps>
export type AlertContentType = React.FC<AlertContentProps>
export type AlertControlsType = React.FC<AlertControlsProps>
export type AlertHeadlineType = React.FC<AlertHeadlineProps>
export type AlertIconType = React.FC<AlertIconProps>
