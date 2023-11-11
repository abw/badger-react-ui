import React from 'react'
import Badger from '../svg/badger-react-ui.svg?react'
import OSS from '../svg/oss.svg?react'

const Index = () =>
  <div className="flow">
    <div className="mobile block-center pad-t-8 flow">
      <Badger className="brui-logo"/>
      <h1 className="mar-t-8">
        React UI Components
      </h1>
      <h2 className="mar-t-none large">
        For Badger Fans
      </h2>
      <p className="larger">
        This is my personal collection of React UI components
        built around the styles provided by{' '}
        <a href="https://abw.github.io/badger-css">Badger CSS</a>
      </p>
      <div className="text-center">
        <OSS className="width-10rem"/>
      </div>
      <p>
        This is Open Source Software and you&apos;re welcome to use it.
        But be warned that it is also Opiniated and Selfish Software.
      </p>
      <p>
        I wrote it for me to help my get my job done.  It provides a
        solid foundation of React components that allow me to get a new
        site up and running quickly.
      </p>
      <p>
        I don&apos;t have the time or inclination to help other people get
        their jobs done (unless they&apos;re my clients, colleagues, family
        or close friends).  So please be aware that this is effectively
        unsupported software and you&apos;re on your own.  If you&apos;re
        not comfortable with that then you should almost certainly be using
        one of the many other fine UI toolkits that are available.
      </p>
      <p>
        Also note that this collection is supposed to be a starting point,
        not a final destination. You can use the components and styles
        provided, but at some point you will probably want or need to dig
        in and start adding your own code, or modifying the builtin
        components.
      </p>
      <p>
        Everything is modular and themeable, so that&apos;s generally
        quite easy to achieve.  But it requires a reasonable knowledge of
        React, CSS and SASS.  The documentation is provided as a reference
        for me (and my colleagues) to use, and it assumes a fairly high
        level of proficiency in these areas.
      </p>
      <p>
        Or to put it another way, if you&apos;re expecting someone to hold
        your hand explaining how to get this up and running, then you&apos;ve
        probably come to the wrong place.
      </p>
    </div>
  </div>

export default Index
