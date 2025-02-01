import TableHead from './Head'
import TableBody from './Body'
import TableFoot from './Foot'
import { TableContentProps } from './types'
import { hasValue } from '@abw/badger-utils'
import { tableSectionProps } from './Utils'

export const TableContent = ({
  body,
  head,
  foot,
  Head=TableHead,
  Body=TableBody,
  Foot=TableFoot,
  Row,
  HeadRow=Row,
  BodyRow=Row,
  FootRow=Row,
  ...props
}: TableContentProps) =>
  <>
    { hasValue(head) &&
      <Head
        Row={HeadRow}
        {...props}
        {...tableSectionProps(head)}
      />
    }
    { hasValue(body) &&
      <Body
        Row={BodyRow}
        {...props}
        {...tableSectionProps(body)}
      />
    }
    { hasValue(foot) &&
      <Foot
        Row={FootRow}
        {...props}
        {...tableSectionProps(foot)}
      />
    }
  </>

export default TableContent
