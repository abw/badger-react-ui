import React      from 'react'
import Section    from '@/page/Section.jsx'
import Example    from '@/site/Example.jsx'
import Component  from './IconLibrary.jsx'
import Source     from './IconLibrary.jsx?raw'
import { Icon, IconLibrary } from '@/components/index.jsx'
import { Link } from '@abw/badger-website'

const LibraryExample = () =>
  <Section
    code="IconLibrary"
  >
    <p>
      The default set of icons is defined as <code>IconLibrary</code>.
      The <code>addIcon()</code> and <code>addIcons()</code> function are
      provided for adding icons to the library.
    </p>
    <div className="grid-fill gap-4 mar-t-8">
      { Object.keys(IconLibrary.icons).map(
        name =>
          <div
            key={name}
            className="text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2"
          >
            <Icon name={name} className="x3"/>
            <div className="small mar-t-4">{name}</div>
          </div>
      )}
    </div>
    <h2>Adding Icons</h2>
    <p>
      You can use the <code>addIcon()</code> and <code>addIcons()</code> functions
      to add icons to the library.  If you don&apos;t want to update the
      standard library then you can create your own copy of the <code>IconLibrary</code>{' '}
      (e.g. by using <code>structuredClone()</code> as shown in this example)
      and then pass that as the third argument to <code>addIcon()</code> or
      second argument to <code>addIcons</code>.  You should then pass your
      icon library to the <code>Icon</code> component using the{' '}
      <code>library</code> property.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
      highlightLines="5,8-16,28"
    />
    <p>
      You can use a <Link to="/theming/theme-provider">Theme Provider</Link> to
      automatically set the <code>library</code> property to your custom library
      to save you from having to specify it every time you use the <code>Icon</code>{' '}
      component.
    </p>
  </Section>

export default LibraryExample