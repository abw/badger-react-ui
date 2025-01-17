import Context        from './Context'
import PagerPrevious  from './Previous'
import PagerNext      from './Next'
import PagerPages     from './Pages'
import { classes }    from '@/src/utils/classes'

export const PagerContent = Context.Consumer(
  ({
    className='pager',
    size,
    color,
    label='Pagination navigation',
    Previous=PagerPrevious,
    Next=PagerNext,
    Pages=PagerPages,
  }) =>
    <div
      role="navigation"
      aria-label={label}
      className={classes(className, size, color)}
    >
      <Previous/>
      <Pages/>
      <Next/>
    </div>
)

export default PagerContent

