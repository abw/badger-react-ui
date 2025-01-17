import { DetailsContentType } from './types'

export const DetailsContent: DetailsContentType = ({
  content,
  children,
  contentClass
}) =>
  <div className={contentClass}>
    {content||children}
  </div>

export default DetailsContent

