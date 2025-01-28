import Context        from './Context'
import DefaultHeading from './Heading'

export const DataTableHeadings = Context.Consumer(
  ({
    columns,
    headingsClass,
    visibleColumns,
    Heading=DefaultHeading,
  }) =>
    <thead>
      <tr className={headingsClass}>
        { visibleColumns
          .filter( name => columns[name] )
          .map(
            name =>
              <Heading
                key={name}
                name={name}
                column={columns[name]}
              />
          )
        }
      </tr>
    </thead>
)

export default DataTableHeadings
