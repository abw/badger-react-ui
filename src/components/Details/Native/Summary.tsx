import { DetailsSummaryProps } from '../types'

const NativeDetailsSummary = ({
  summary,
  summaryClass
}: DetailsSummaryProps) =>
  <summary className={summaryClass}>
    {summary}
  </summary>

export default NativeDetailsSummary

