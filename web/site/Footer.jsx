import React from 'react'
import { DATE, VERSION } from './Config.js'

const Footer = () =>
  <footer>
    <div className="flex space middle">
      <div className="large">
        Badger React UI
      </div>
      <div className="text-center small">
        by <a href="https://github.com/abw">Andy Wardley</a>
      </div>
      <div className="text-right">
        v{VERSION}<br/>
        {DATE}
      </div>
    </div>
  </footer>

export default Footer
