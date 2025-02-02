import WithIcons from '@/components/Icon/WithIcons'
import { classes } from '@/src/utils/classes'
import { extract } from '@abw/badger-utils'
import { DetailsSummaryProps } from './types'

const DetailsSummary = ({
  summary,
  summaryClass,
  toggleOpen,
  detailsSummaryClass='summary',
  summarySpanClass='summary-text',
  ...props
}: DetailsSummaryProps) =>
  <div
    onClick={toggleOpen}
    className={classes(detailsSummaryClass, summaryClass)}
  >
    <WithIcons
      text={summary}
      spanText
      spanClass={summarySpanClass}
      {...extract(props, /^(icon|text)/)}
    />
  </div>

export default DetailsSummary

