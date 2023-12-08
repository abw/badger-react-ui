import React          from 'react'
import Context        from './Context.js'
import PagerPrevious  from './Previous.jsx'
import PagerNext      from './Next.jsx'
import PagerPages     from './Pages.jsx'
import { classes }    from '@/src/utils/classes.js'

const PagerContent = ({
  className='pager',
  size,
  color,
  Previous=PagerPrevious,
  Next=PagerNext,
  Pages=PagerPages,
}) =>
  <div className={classes(className, size, color)}>
    <Previous/>
    <Pages/>
    <Next/>
  </div>

export default Context.Consumer(PagerContent)

