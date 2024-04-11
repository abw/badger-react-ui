import React, { useEffect, useRef } from 'react'
import { idSafe } from '../utils/Misc.js'
import Context from './Context.js'

const Section = ({
  id,
  code,
  title=code,
  children,
  addPageToc,
  split
}) => {
  const elemId = idSafe(id || code || title)
  const ref = useRef()
  const tocText = code
    ? `code:${code}`
    : title

  useEffect(
    () => {
      if (addPageToc) {
        addPageToc(elemId, tocText, ref)
      }
    },
    [id, code, title]
  )
  return (
    <section id={elemId} ref={ref}>
      <h3 className={code ? 'font-mono page-section' : 'page-section'}>{title}</h3>
      <div className={split ? 'columns-2 stack-desktop' : ''}>
        {children}
      </div>
    </section>
  )
}

export default Context.Consumer(Section)