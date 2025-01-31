import TableHead from './Head'
import TableBody from './Body'
import TableFoot from './Foot'
import TableRow  from './Row'
import { TableRowsProps } from './types'
import { hasValue } from '@abw/badger-utils'

export const TableRows = ({
  bodyRows,
  headRows,
  footRows,
  headProps={},
  bodyProps={},
  footProps={},
  Head=TableHead,
  Body=TableBody,
  Foot=TableFoot,
  Row=TableRow,
  HeadRow=Row,
  BodyRow=Row,
  FootRow=Row,
}: TableRowsProps) =>
  <>
    { hasValue(headRows) &&
      <Head
        headRows={headRows}
        HeadRow={HeadRow}
        {...headProps}
      />
    }
    { hasValue(bodyRows) &&
      <Body
        bodyRows={bodyRows}
        BodyRow={BodyRow}
        {...bodyProps}
      />
    }
    { hasValue(footRows) &&
      <Foot
        footRows={footRows}
        FootRow={FootRow}
        {...footProps}
      />
    }
  </>

export default TableRows
