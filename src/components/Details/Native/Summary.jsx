import React from 'react'

const Summary = ({
  summary,
  summaryClass
}) =>
  <summary className={summaryClass}>
    {summary}
  </summary>

export default Summary

