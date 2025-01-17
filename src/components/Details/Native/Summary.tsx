import { DetailsSummaryType } from '../types'

const NativeDetailsSummary: DetailsSummaryType = ({
  summary,
  summaryClass
}) =>
  <summary className={summaryClass}>
    {summary}
  </summary>

export default NativeDetailsSummary

