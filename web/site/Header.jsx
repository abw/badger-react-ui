import React from 'react'
import Link from '@/ui/Link.jsx'
import { Icon } from '@/components/index.jsx'
import { Toggle,useTheme } from '@abw/react-night-and-day'
import { VERSION } from './Config.js'
import { NO_SIDEBAR, SIDEBAR } from './Constants.jsx'

const Header = () => {
  const { variant, setVariant } = useTheme()
  return (
    <header>
      <nav>
        <div>
          <Icon
            name="bars"
            className="toggle-sidebar action"
            onClick={() => setVariant(variant === SIDEBAR ? NO_SIDEBAR : SIDEBAR)}
          />
          <Link to="/" className="home mar-l-2" text="Badger React UI"/>
          <span className="small mar-l-2">v{VERSION}</span>
        </div>
        <div className="flex middle">
          <a href="https://github.com/abw/badger-react-ui">
            <Icon name="github" className="mar-r-4"/>
          </a>
          <Toggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header
