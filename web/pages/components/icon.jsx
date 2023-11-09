import React      from 'react'
import Example    from '@/site/Example.jsx'
import IconComp   from '@/examples/Icon/Icon.jsx'
import IconSrc    from '@/examples/Icon/Icon.jsx?raw'
import IconClassComp   from '@/examples/Icon/IconClassName.jsx'
import IconClassSrc    from '@/examples/Icon/IconClassName.jsx?raw'
import IconPathComp from '@/examples/Icon/IconPath.jsx'
import IconPathSrc  from '@/examples/Icon/IconPath.jsx?raw'
import { Icon, IconData } from '@/components/index.jsx'

const IconExamples = () =>
  <div className="prose flow">
    <h1>Icon</h1>
    <p>
      Use the <code>Icon.jsx</code> component to render an icon.
    </p>

    <h2><code>name</code></h2>
    <p>
      You can specify the <code>name</code> of an icon defined in
      the default icon libary.
    </p>
    <Example
      Component={IconComp}
      code={IconSrc}
      expand
    />

    <h2><code>className</code></h2>
    <p>
      The <code>className</code> property can be used to set a CSS class.
    </p>
    <Example
      Component={IconClassComp}
      code={IconClassSrc}
      expand
    />

    <h1><code>path</code></h1>
    <p>
      You can specify the data for a path.  The default viewbox is assumed to
      be 512px wide and 512px high.  You can set the <code>width</code> and{' '}
      <code>height</code> properties to change that.
    </p>
    <Example
      Component={IconPathComp}
      code={IconPathSrc}
      expand
    />

    <h2>IconData</h2>
    <p>
      The default set of icons is defined as <code>IconData</code>
    </p>
    <div className="grid-fill gap-4 mar-t-8">
      { Object.keys(IconData).map(
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
  </div>

export default IconExamples