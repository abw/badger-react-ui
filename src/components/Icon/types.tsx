export interface IconProps {
  name: string,
  className?: string,
  size?: string,
  color?: string,
  path?: string,
  type?: string,
  style?: string | object,
  transform?: string | object,
  fixedWidth?: boolean,
  onClick?: (e: MouseEvent) => void
}

export type ThemedIconType = React.FC<IconProps>
