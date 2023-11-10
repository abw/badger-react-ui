import React        from 'react'
import Example      from '@/site/Example.jsx'
import AlertComp    from '@/examples/Alert/Alert.jsx'
import AlertSrc     from '@/examples/Alert/Alert.jsx?raw'
import Title        from './_examples/title/index.jsx'
import Text         from './_examples/text/index.jsx'
import Headline     from './_examples/headline/index.jsx'
import HeadIcon     from './_examples/headIcon/index.jsx'
import Revealable   from './_examples/revealable/index.jsx'
import Revealed     from './_examples/revealed/index.jsx'
import Dismissable  from './_examples/dismissable/index.jsx'
import OnDismiss    from './_examples/onDismiss/index.jsx'
import ClassName    from './_examples/className/index.jsx'
import Border       from './_examples/border/index.jsx'
import Radius       from './_examples/radius/index.jsx'
import Shadow       from './_examples/shadow/index.jsx'
import Size         from './_examples/size/index.jsx'
import Color        from './_examples/color/index.jsx'
import Type         from './_examples/type/index.jsx'
import Stripe       from './_examples/stripe/index.jsx'
import Info         from './_examples/Info/index.jsx'
import Success      from './_examples/Success/index.jsx'
import Warning      from './_examples/Warning/index.jsx'
import Error        from './_examples/Error/index.jsx'

const AlertExamples = () =>
  <div className="prose flow">
    <h1>Alert</h1>
    <p>
      Use the <code>Alert.jsx</code> component to render an alert.
    </p>

    <Example
      Component={AlertComp}
      code={AlertSrc}
      expand
    />

    <Title/>
    <Text/>
    <Headline/>
    <HeadIcon/>
    <Revealable/>
    <Revealed/>
    <Dismissable/>
    <OnDismiss/>
    <ClassName/>
    <Border/>
    <Radius/>
    <Shadow/>
    <Size/>
    <Color/>
    <Type/>
    <Stripe/>
    <Info/>
    <Success/>
    <Warning/>
    <Error/>
  </div>

export default AlertExamples