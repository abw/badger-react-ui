import DataTable from '@/components/DataTable/DataTable'
import Body from './Body'
import { parseSize } from '@/src/utils/size'
import { useContainer } from '@/src/index'
import { DataTablesResponsiveProps } from './types'

const DataTables = ({
  breakpoint,
  ...props
}: DataTablesResponsiveProps) => {
  const minPx = parseSize(breakpoint)
  const { ref, width } = useContainer()
  return (
    <div ref={ref}>
      <DataTable
        Body={(width && width < minPx) ? Body : undefined}
        {...props}
      />
    </div>
  )
}

export default DataTables