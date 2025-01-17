import WithIcons from '@/components/Icon/WithIcons'
import { classes } from '@/src/utils/classes'
import { extract } from '@abw/badger-utils'
import { DetailsSummaryType } from './types'

const DetailsSummary: DetailsSummaryType = ({
  summary,
  summaryClass,
  toggleOpen,
  detailsSummaryClass='summary',
  summarySpanClass='summary-text',
  ...props
}) =>
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

