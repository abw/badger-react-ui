import React from 'react'
import { isFunction, range, sleep, splitList } from '@abw/badger-utils'
import { useState } from 'react'
import { createCssVariablesTheme, getHighlighter } from 'shiki'
import { transformerNotationHighlight } from '@shikijs/transformers'

const cssvars = 'css-variables'
const cssVarsTheme = createCssVariablesTheme({
  name: cssvars,
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true
})

const highlighter = getHighlighter({
  themes: [cssVarsTheme],
  langs: ['html', 'javascript', 'jsx', 'json', 'css', 'scss', 'bash', 'yaml'],
})

export const CodeBlock = ({
  code,
  language='jsx',
  caption,
  expand=false,
  fixed=expand,
  className='',
  highlightLines,
  undent=false
}) => {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(expand)
  const [markup, setMarkup] = useState('Loading...')
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }
  React.useEffect(
    () => {
      const transformers = [ removeLineEndings ]

      if (highlightLines) {
        transformers.push(
          lineHighlighter(highlightLines)
        )
      }
      highlighter.then(
        highlighter => setMarkup(
          highlighter.codeToHtml(
            prepareCode(code, { undent }),
            {
              lang: language,
              theme: cssvars,
              transformers: [
                transformerNotationHighlight(),
                ...transformers
              ],
            }
          )
        )
      )
    },
    [code, language, highlightLines]
  )

  return (
    <div className={`codeblock ${className} ${expanded ? 'expanded' : ''} ${fixed ? 'fixed-open' : 'expandable'}`}>
      {Boolean(caption) && <h4 className="caption">{caption}</h4>}
      <div className="controls">
        <div className="expand" onClick={() => setExpanded(! expanded)}>
          { expanded ? 'Compress' : 'Expand' }
        </div>
        <div
          className={`clipboard ${copied ? 'copied' : ''}`}
          onClick={copy}
        >
          { copied ? 'Copied' : 'Copy' }
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  )
}

export const prepareCode = (code, options={}) => {
  // This is some hackery to allow us to display source code fragments.
  // We want the components to be valid JSX and executable so we can display
  // the output of running them.  But we also want to present a cleaner view
  // in the source code.  For example, we have to change the import path,
  // from e.g. '../../src/index.js' to '@abw/badger-react-ui'
  code = code
    // remove everything up to {/* START */}
    .replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/, '')
    // and everything from {/* END */} onwards
    .replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/, '')
    // and the // PRETEND: prefix
    .replaceAll(/\/\/\s*PRETEND:\s/g, '')
    // also cleanup {/* PRETEND: some stuff */}
    .replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g, '$1')
    // .replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g, '')
    // .replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g, '')
    .replace(/\n+$/, '')
    // .replaceAll(/*REAL:\s*\n.*?\n/g, '')       // and any line after // REAL:
  if (options.undent) {
    const match = new RegExp('^' + ' '.repeat(options.undent), 'gm')
    code = code.replaceAll(match, '')
  }
  return code
}

const removeLineEndings = {
  code(code) {
    // remove any newlines as long as the preceding line isn't a blank line,
    const children = code.children
    // console.log(`children: `, children)
    code.children = code.children.filter(
      (line, n) => !(
        line.type === 'text'
        && line.value === '\n'
        && (n > 0 && children[n-1].children?.length > 0)
      )
    )
  },
}

const lineHighlighter = highlightLines => {
  // highlightLines can be a single line, e.g. "7", a range of lines,
  // e.g. "7-9", or multiple lines/ranges, e.g. "7,11-12,15-18".
  // Or it can be a function which is passed a line and returns true/false
  const highlighter = isFunction(highlightLines)
    ? highlightLines
    : makeHighlighter(highlightLines)

  return {
    line(node, line) {
      if (highlighter(line)) {
        this.addClassToHast(node, 'highlighted')
      }
    }
  }
}

const makeHighlighter = highlightLines => {
  const lineRanges = splitList(highlightLines)
  const highlines = lineRanges.reduce(
    (highlines, lineRange)  => {
      const [a, b] = lineRange.split('-')
      const start = parseInt(a)
      const end = b ? parseInt(b) : start
      range(start, end).forEach(
        line => highlines[line] = true
      )
      return highlines
    },
    { }
  )
  return line => highlines[line]
}

//const highlighter = lines => {
//  return n => n % 2
//    ? { class: 'red bgc-50' }
//    : { }
//}

export default CodeBlock
