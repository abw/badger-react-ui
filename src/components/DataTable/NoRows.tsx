import Context     from './Context'

export const DataTableNoRows = Context.Consumer(
  ({
    noRowsClass,
    noRowsText,
    visibleColumns,
  }) =>
    <tr
      className={noRowsClass}
    >
      <td colSpan={visibleColumns.length}>
        {noRowsText}
      </td>
    </tr>
)

export default DataTableNoRows
