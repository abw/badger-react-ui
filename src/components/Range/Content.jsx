import React from 'react'
import Context from './Context.js'
import DefaultTrack from './Track.jsx'
// import DefaultSelection from './Selection.jsx'
// import DefaultThumb from './Thumb.jsx'

const Content = ({
  className='range',
  Track=DefaultTrack,
  // Selection=DefaultSelection,
  // Thumb=DefaultThumb,
  min, max,
  value,
  percent,
  round,
}) =>
  <>
    <div className={className} style={{ '--pos': `${percent}%` }}>
      <Track/>
      {/* <Selection/> */}
      {/* <Thumb/> */}
    </div>
    <p>
      {min} to {max} round:{round} - value:{value} ({percent}%)
    </p>
  </>

export const RangeContent = Context.Consumer(Content)
export default RangeContent
