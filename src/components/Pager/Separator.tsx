import Context from './Context'

const defaultPageSeparator = <>&hellip;</>

export const PagerSeparator = Context.Consumer(
  ({
    pageSeparatorClass='separator',
    pageSeparator=defaultPageSeparator,
  }) =>
    <div
      role="separator"
      className={pageSeparatorClass}
    >
      {pageSeparator}
    </div>
)

export default PagerSeparator

