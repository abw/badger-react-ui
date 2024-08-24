import React from 'react'
import Context from './Context.jsx'
import Link from '@/ui/Link.jsx'
import Badger from '@/svg/badger-white.svg?react'
import { Icon } from '@/components/index.jsx'
import { Toggle } from '@abw/react-night-and-day'
import { VERSION } from './Config.js'

const Header = ({ sidebarIconClick }) =>
  <header>
    <nav>
      <div>
        <Icon
          name="bars"
          className="toggle-sidebar action"
          onClick={sidebarIconClick}
        />
        <Link to="/" className="home mar-l-2" text="Badger React UI"/>
        <span className="small mar-l-2">v{VERSION}</span>
      </div>
      <div className="flex middle gap-4">
        <a
          href="https://badgerpower.com/"
          target="_blank"
          rel="noreferrer">
          <Badger className="badgerpower"/>
        </a>
        <a
          href="https://github.com/abw/badger-react-ui"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github"/>
        </a>
        <Toggle/>
      </div>
    </nav>
  </header>

export default Context.Consumer(Header)
