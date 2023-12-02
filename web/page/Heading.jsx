import React, { useEffect, useRef } from 'react'
import { idSafe } from '../utils/Misc.js'
import Context from './Context.js'

const Heading = ({
  id,
  title,
  addPageTocHeading,
}) => {
  const elemId = idSafe(id || title)
  const ref = useRef()

  useEffect(
    () => {
      if (addPageTocHeading) {
        addPageTocHeading(elemId, title, ref)
      }
    },
    [id, title]
  )
  return (
    <h2 id={elemId} ref={ref} className="section-heading">{title}</h2>
  )
}

export default Context.Consumer(Heading)