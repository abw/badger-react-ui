import Context from './Context'

export const DropdownBody = Context.Consumer(
  ({
    bodyProps,
    noContent,
    content=noContent,
  }) =>
    <div {...bodyProps}>
      { content }
    </div>
)

export default DropdownBody