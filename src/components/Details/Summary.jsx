import React from 'react'
import WithIcons from '@/components/Icon/WithIcons'
import { classes } from '@/src/utils/classes'
import { extract } from '@abw/badger-utils'

const Summary = ({
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
    {/* {summary} */}
  </div>

export default Summary

