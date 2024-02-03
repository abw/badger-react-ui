import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import DescTable  from '@/web/site/DescTable.jsx'

const Select = () =>
  <>
    <p className="large">
      The <code>Select</code> component implements a custom select input.
    </p>
    <Example
      Component={Component}
      code={Source}
    />

    <h2>Context</h2>
    <div className="cols-2 stack-desktop">
      <p>
        A react context is created which provides the items listed below.
        Any other properties passed in to the component will also be
        accessible to child components.
      </p>
      <p>
        Custom components can be wrapped with the <code>SelectConsumer</code>{' '}
        higher order component to receive these items as properties.  Or you
        can use the <code>useSelect</code> hook to access them.
      </p>
    </div>
    <DescTable
      items={[
        ['close',         'Handler to close the menu.'],
        ['cursor',        <>The index of the currently selected option in the <code>options</code> array</>],
        ['disabled',      'Boolean flag indicating if the input is disabled'],
        ['displayOption', 'Function to display the content for an option'],
        ['input',         'The current input value displayed in the field.'],
        ['isOpen',        'Boolean flag indicating if the menu of options is displayed.'],
        ['menuRef',       'A React reference for the menu container.'],
        ['onBlur',        'Handler for blur events.'],
        ['onClick',       'Handler for click events.'],
        ['onFocus',       'Handler for focus events.'],
        ['onKeyDown',     'Handler for keyboard events.'],
        ['open',          'Handler to open the menu.'],
        ['options',       'The array of selection options.'],
        ['selected',      <>The selected element in the <code>options</code> array</>],
        ['selectCursor',  'Handler to select the option indexed by the cursor.'],
        ['selectOption',  'Handler to select an option.'],
        ['setCursor',     'Handler to set the cursor'],
        ['validOption',   'Function to determine if an option is valid (i.e. not disabled)'],
        ['value',         'The value of the current selected option.'],
      ]}
    />

  </>

export default Select