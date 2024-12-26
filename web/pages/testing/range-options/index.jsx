import React from 'react'
import OnChange from './_examples/OnChange.jsx'
import OnChangeValue from './_examples/OnChangeValue.jsx'

const Testing = () =>
  <div>
    <h1>Range Options</h1>
    <p>
      We want to have a range handler which is only fired when the slider
      changes enough to select a different option.
    </p>
    <p>
      This example uses <code>onChange</code> and the event is fired for
      every drag event, no matter how small.
    </p>
    <OnChange/>
    <p>
      This example uses <code>onChangeValue</code> which is only fired when
      the change is enough to affect the minimum or maximum value.  When
      using options, as we are here, the values are integers from 0 to 5.
    </p>
    <OnChangeValue/>
  </div>

export default Testing