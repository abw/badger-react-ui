import TableHead from './Head'
import TableBody from './Body'
import TableFoot from './Foot'
import { TableRowsProps } from './types'
import { hasValue } from '@abw/badger-utils'

const TableRows = ({
  bodyRows,
  headRows,
  footRows,
  Head=TableHead,
  Body=TableBody,
  Foot=TableFoot,
  ...props
}: TableRowsProps) =>
  <>
    { hasValue(headRows) &&
      <Head headRows={headRows} {...props}/>
    }
    { hasValue(bodyRows) &&
      <Body bodyRows={bodyRows} {...props}/>
    }
    { hasValue(footRows) &&
      <Foot footRows={footRows} {...props}/>
    }
  </>

export default TableRows
