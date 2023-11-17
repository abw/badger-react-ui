import React from 'react'
import CodeBlock from './CodeBlock.jsx'

export const Example = ({
  Component,
  code,
  html,
  children,
  className='',
  language,
  ...props
  // caption,
  // expand,
  // undent,
}) => {
  return (
    <div className={`example grid-2 gap-8 stack-desktop ${className}`}>
      <div className="source">
        <CodeBlock
          code={code||html}
          language={html ? 'html' : language}
          {...props}
          /*
          caption={caption}
          expand={expand}
          undent={undent}
          */
        />
      </div>
      {/* </div> */}
      { Boolean(children) &&
        <div className="interim">
          {children}
        </div>
      }
      { Component
        ? <div className="output">
            <h4 className="caption">Output</h4>
            <Component/>
          </div>
        : null
      }
      { html
        ? <div className="output">
            <h4 className="caption">Output</h4>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        : null
      }
    </div>
  )
}


export default Example
