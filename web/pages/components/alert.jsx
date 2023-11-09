import React              from 'react'
import Example            from '@/site/Example.jsx'
import AlertComp          from '@/examples/Alert/Alert.jsx'
import AlertSrc           from '@/examples/Alert/Alert.jsx?raw'
import AlertTextComp      from '@/examples/Alert/AlertText.jsx'
import AlertTextSrc       from '@/examples/Alert/AlertText.jsx?raw'
import AlertTitleComp     from '@/examples/Alert/AlertTitle.jsx'
import AlertTitleSrc      from '@/examples/Alert/AlertTitle.jsx?raw'
import AlertHeadlineComp  from '@/examples/Alert/AlertHeadline.jsx'
import AlertHeadlineSrc   from '@/examples/Alert/AlertHeadline.jsx?raw'
import AlertHeadIconComp  from '@/examples/Alert/AlertHeadIcon.jsx'
import AlertHeadIconSrc   from '@/examples/Alert/AlertHeadIcon.jsx?raw'
import AlertClassComp     from '@/examples/Alert/AlertClassName.jsx'
import AlertClassSrc      from '@/examples/Alert/AlertClassName.jsx?raw'
import AlertBorderComp    from '@/examples/Alert/AlertBorder.jsx'
import AlertBorderSrc     from '@/examples/Alert/AlertBorder.jsx?raw'
import AlertRadiusComp    from '@/examples/Alert/AlertRadius.jsx'
import AlertRadiusSrc     from '@/examples/Alert/AlertRadius.jsx?raw'
import AlertShadowComp    from '@/examples/Alert/AlertShadow.jsx'
import AlertShadowSrc     from '@/examples/Alert/AlertShadow.jsx?raw'
import AlertSizeComp      from '@/examples/Alert/AlertSize.jsx'
import AlertSizeSrc       from '@/examples/Alert/AlertSize.jsx?raw'
import AlertRevealComp    from '@/examples/Alert/AlertReveal.jsx'
import AlertRevealSrc     from '@/examples/Alert/AlertReveal.jsx?raw'
import AlertRevealedComp  from '@/examples/Alert/AlertRevealed.jsx'
import AlertRevealedSrc   from '@/examples/Alert/AlertRevealed.jsx?raw'
import AlertDismissComp   from '@/examples/Alert/AlertDismiss.jsx'
import AlertDismissSrc    from '@/examples/Alert/AlertDismiss.jsx?raw'
import AlertOnDismissComp from '@/examples/Alert/AlertOnDismiss.jsx'
import AlertOnDismissSrc  from '@/examples/Alert/AlertOnDismiss.jsx?raw'
import AlertTypeComp      from '@/examples/Alert/AlertType.jsx'
import AlertTypeSrc       from '@/examples/Alert/AlertType.jsx?raw'
import AlertColorComp     from '@/examples/Alert/AlertColor.jsx'
import AlertColorSrc      from '@/examples/Alert/AlertColor.jsx?raw'
import InfoComp           from '@/examples/Alert/Info.jsx'
import InfoSrc            from '@/examples/Alert/Info.jsx?raw'
import SuccessComp        from '@/examples/Alert/Success.jsx'
import SuccessSrc         from '@/examples/Alert/Success.jsx?raw'
import WarningComp        from '@/examples/Alert/Warning.jsx'
import WarningSrc         from '@/examples/Alert/Warning.jsx?raw'
import ErrorComp          from '@/examples/Alert/Error.jsx'
import ErrorSrc           from '@/examples/Alert/Error.jsx?raw'

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

    <h2 id="title"><code>title</code></h2>
    <p>
      The <code>title</code> property can be used to set a title.
    </p>
    <Example
      Component={AlertTitleComp}
      code={AlertTitleSrc}
      expand
    />

    <h2 id="text"><code>text</code></h2>
    <p>
      The <code>text</code> property can be used to set the body text.
    </p>
    <Example
      Component={AlertTextComp}
      code={AlertTextSrc}
      expand
    />

    <h2 id="headline"><code>headline</code></h2>
    <p>
      The <code>headline</code> property can be used to set a headline.
    </p>
    <Example
      Component={AlertHeadlineComp}
      code={AlertHeadlineSrc}
      expand
    />

    <h2 id="headicon"><code>headIcon</code></h2>
    <p>
      The <code>headIcon</code> property can be used to add an icon to the
      headline.
    </p>
    <Example
      Component={AlertHeadIconComp}
      code={AlertHeadIconSrc}
      expand
    />

    <h2 id="revealable"><code>revealable</code></h2>
    <p>
      The <code>revealable</code> property can be used to make the alert
      revealable.
    </p>
    <Example
      Component={AlertRevealComp}
      code={AlertRevealSrc}
      expand
    />

    <h2 id="revealed"><code>revealed</code></h2>
    <p>
      The <code>revealed</code> property can be set to make it a revealable
      alert initially revealed.
    </p>
    <Example
      Component={AlertRevealedComp}
      code={AlertRevealedSrc}
      expand
    />

    <h2 id="dismissable"><code>dismissable</code></h2>
    <p>
      The <code>dismissable</code> property can be used to make an alert
      dismissable.
    </p>
    <Example
      Component={AlertDismissComp}
      code={AlertDismissSrc}
      expand
    />

    <h2 id="onDismiss"><code>onDismiss</code></h2>
    <p>
      The <code>onDismiss</code> property can be used to register a function
      which will be called when the alert is dismissed.
    </p>
    <Example
      Component={AlertOnDismissComp}
      code={AlertOnDismissSrc}
      expand
    />

    <h2 id="className"><code>className</code></h2>
    <p>
      The <code>className</code> property can be used to set a CSS class.
    </p>
    <Example
      Component={AlertClassComp}
      code={AlertClassSrc}
      expand
    />

    <h2 id="border"><code>border</code></h2>
    <p>
      The <code>border</code> property can be used to add a border.  This can
      be a number to indicate the border width.
    </p>
    <Example
      Component={AlertBorderComp}
      code={AlertBorderSrc}
      expand
    />

    <h2 id="radius"><code>radius</code></h2>
    <p>
      The <code>radius</code> property can be used to set the border radius.
    </p>
    <Example
      Component={AlertRadiusComp}
      code={AlertRadiusSrc}
      expand
    />

    <h2 id="shadow"><code>shadow</code></h2>
    <p>
      The <code>shadow</code> property can be used to add a shadow.  The
      default value is 1 or you can set it to any number from{' '}
      1 to 5.
    </p>
    <Example
      Component={AlertShadowComp}
      code={AlertShadowSrc}
      expand
    />

    <h2 id="size"><code>size</code></h2>
    <p>
      The <code>size</code> property can be used to set the text size.
    </p>
    <Example
      Component={AlertSizeComp}
      code={AlertSizeSrc}
      expand
    />

    <h2 id="color"><code>color</code></h2>
    <p>
      The <code>color</code> property can be used to set it to use any
      color range.
    </p>
    <Example
      Component={AlertColorComp}
      code={AlertColorSrc}
      expand
    />

    <h2 id="type"><code>type</code></h2>
    <p>
      The <code>type</code> property can be used to set it to one of the
      pre-defined types: <code>info</code>, <code>success</code>,{' '}
      <code>warning</code> or <code>error</code>.
    </p>
    <Example
      Component={AlertTypeComp}
      code={AlertTypeSrc}
      expand
    />

    <h2 id="info"><code>Info</code></h2>
    <p>
      The <code>Info</code> component is a short-cut to generate an info alert.
    </p>
    <Example
      Component={InfoComp}
      code={InfoSrc}
      expand
    />

    <h2 id="success"><code>Success</code></h2>
    <p>
      The <code>Success</code> component is a short-cut to generate a success alert.
    </p>
    <Example
      Component={SuccessComp}
      code={SuccessSrc}
      expand
    />

    <h2 id="warning"><code>Warning</code></h2>
    <p>
      The <code>Warning</code> component is a short-cut to generate a warning alert.
    </p>
    <Example
      Component={WarningComp}
      code={WarningSrc}
      expand
    />

    <h2 id="error"><code>Error</code></h2>
    <p>
      The <code>Error</code> component is a short-cut to generate an error alert.
    </p>
    <Example
      Component={ErrorComp}
      code={ErrorSrc}
      expand
    />
  </div>

export default AlertExamples