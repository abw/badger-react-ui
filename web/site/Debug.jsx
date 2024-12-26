import React from 'react'
import { useSite } from './Context.jsx'

const Debug = () => {
  const { width, breakpoint, theme, variant, sidebarOpen } = useSite()
  return (
    <table className="shaded celled">
      <tbody>
        <Row k="Width" v={width}/>
        <Row k="Breakpoint" v={breakpoint}/>
        <Row k="Theme" v={theme}/>
        <Row k="Variant" v={variant}/>
        <Row k="Sidebar" v={sidebarOpen ? 'open' : 'closed'}/>
      </tbody>
    </table>
  )
}

const Row = ({ k, v }) =>
  <tr>
    <th>{k}</th>
    <td>{v}</td>
  </tr>


export default Debug