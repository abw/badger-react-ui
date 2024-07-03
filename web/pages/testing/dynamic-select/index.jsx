import React from 'react'
import DynamicSelect from './_examples/DynamicSelect.jsx'
import DynamicMultiSelect from './_examples/DynamicMultiSelect.jsx'

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
    <p>
      And here&apos;s the same thing for <code>MultiSelect</code>
    </p>
    <p>
      Both sets of options share values for <code>a</code> to <code>e</code>.
      If you select <code>Alpha</code>, <code>Bravo</code> and <code>Golf</code>{' '}
      in the NATO phonetic alphabet, for example, and then switch to the
      Animals, you should see <code>Ant</code> and <code>Badger</code>{' '}
      selected.  <code>Alpha</code> and <code>Ant</code> both have the save
      value (<code>a</code>), as do <code>Bravo</code> and <code>Badger</code>{' '}
      (<code>b</code>).  But there is no value in the Animals set for <code>g</code>
      (from <code>Golf</code>) so that should be removed.
    </p>
    <DynamicMultiSelect/>
  </div>

export default Testing