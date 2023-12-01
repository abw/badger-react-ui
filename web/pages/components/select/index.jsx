import React          from 'react'
import Select         from './_examples/Select/index.jsx'
import Options        from './_examples/options/index.jsx'
import DisplayOption  from './_examples/displayOption/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import Sections       from '@/web/page/Sections.jsx'

const SelectExamples = () =>
  <div className="flow">
    <h1>Select</h1>
    <Select/>
    <Sections tocName="select">
      <Options/>
      <DisplayOption/>
      <DisplayValue/>
      <h2>Other Properties</h2>
      <p>
        These are implemented but the documentation is TODO.
      </p>

      <h3>General</h3>
      <ul>
        <li>disabled</li>
        <li>placeholder</li>
      </ul>

      <h3>CSS Classes</h3>
      <ul>
        <li>placeholderClass</li>
        <li>inputClass</li>
        <li>selectClass</li>
        <li>selectingClass</li>
        <li>optionsClass</li>
        <li>optionClass</li>
        <li>noOptionsClass</li>
        <li>activeClass</li>
      </ul>

      <h3>Event Handlers</h3>
      <ul>
        <li>onLoad</li>
        <li>onUnload</li>
        <li>onFocus</li>
        <li>onBlur</li>
        <li>onClick</li>
        <li>onOpen</li>
        <li>onClose</li>
        <li>onSelect</li>
      </ul>

      <h3>Components</h3>
      <ul>
        <li>Content</li>
        <li>Input</li>
        <li>Options</li>
        <li>NoOptions</li>
        <li>Option</li>
      </ul>

    </Sections>
  </div>

export default SelectExamples