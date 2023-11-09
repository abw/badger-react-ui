import React from 'react'
import Link from '@/ui/Link.jsx'
import { Icon } from '@/components/index.jsx'
import { Toggle } from '@abw/react-night-and-day'

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/" className="home mar-l-2" text="Badger React UI"/>
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
