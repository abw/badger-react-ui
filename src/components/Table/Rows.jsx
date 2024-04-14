import React from 'react'
import TableHead from './Head.jsx'
import TableBody from './Body.jsx'
import TableFoot from './Foot.jsx'

const Rows = ({
  bodyRows,
  headRows,
  footRows,
  Head=TableHead,
  Body=TableBody,
  Foot=TableFoot,
  ...props
}) =>
  <>
    { Boolean(headRows) &&
      <Head headRows={headRows} {...props}/>
    }
    <Body bodyRows={bodyRows} {...props}/>
    { Boolean(footRows) &&
      <Foot footRows={footRows} {...props}/>
    }
  </>

export default Rows
