import React from 'react'
import Link from '../ui/Link.jsx'
import { useResolvedPath } from 'react-router-dom'
import ScrollToId from '../utils/ScrollToId.js'

const Menu = ({title, path, items}) => {
  const resolved = useResolvedPath()
  const open = path && resolved.pathname.slice(0, path.length) === path

  return (
    <details className="menu" open={open}>
      <summary>{title}</summary>
      <ul>
        { items.map(
          item => {
            const active = resolved.pathname === item.to
            return (
              <li key={item.to}>
                <Link className="item" {...item}/>
                { (Boolean(item.toc) && active) &&
                  <ul className="toc">
                    { Object.entries(item.toc).map(
                      ([id, text]) =>
                        <li key={id} onClick={() => ScrollToId(id)}>
                          { text.match(/^code:/)
                            ? <code>{text.replace(/^code:/, '')}</code>
                            : text
                          }
                        </li>
                    )}
                  </ul>
                }
              </li>
            )
          }
        )}
      </ul>
    </details>
  )
}

export default Menu