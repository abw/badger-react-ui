import { DetailsContentProps } from './types'

export const DetailsContent = ({
  content,
  children,
  contentClass
}: DetailsContentProps) =>
  <div className={contentClass}>
    {content||children}
  </div>

export default DetailsContent

