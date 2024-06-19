import React from 'react'
import DynamicSelect from './_examples/DynamicSelect.jsx'

const Testing = () =>
  <div className="flow">
    <h1>Dynamic Select</h1>
    <p>
      Sam &quot;Bugfynder General&quot; Matthews found another bug that can
      surface when options in a select input change on some external trigger.
    </p>
    <p>
      Click on the buttons below to toggle between different sets of options.
      The select component should reset and redisplay when you do (it didn&apos;t
      before the fix)
    </p>
    <p>
      Note that the currently selected value may apply in the new options
      set.  In this example the &quot;David Donkey&quot; and &quot;David St. Hubbins&quot;
      options both have the same <code>id</code> of <code>david</code>.  So
      if you select that value in one set and then switch the options, the
      corresponding value should be selected from the other set.
    </p>
    <DynamicSelect/>
  </div>

export default Testing