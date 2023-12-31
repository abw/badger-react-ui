import React    from 'react'
import Context  from './Context.js'
import Icon     from '../Icon/Icon.jsx'

const Header = ({
  headerClass,
  showControls,
}) =>
  <header className={headerClass}>
    <div className="flex space middle">
      <div>pp</div>
      <Icon
        name="cog"
        className="hover"
        onClick={showControls}
      />
    </div>
  </header>

export default Context.Consumer(Header)