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
  ...props
}: TableContentProps) =>
  <>
    { hasValue(head) &&
      <Head {...props} {...tableSectionProps(head)}/>
    }
    { hasValue(body) &&
      <Body {...props} {...tableSectionProps(body)}/>
    }
    { hasValue(foot) &&
      <Foot {...props} {...tableSectionProps(foot)}/>
    }
  </>

export default TableContent
