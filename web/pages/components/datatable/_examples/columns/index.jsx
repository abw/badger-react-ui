import React          from 'react'
import String         from './String.jsx'
import StringSrc      from './String.jsx?raw'
import Array          from './Array.jsx'
import ArraySrc       from './Array.jsx?raw'
import ArrayField     from './ArrayField.jsx'
import ArrayFieldSrc  from './ArrayField.jsx?raw'
import ArrayObj       from './ArrayObj.jsx'
import ArrayObjSrc    from './ArrayObj.jsx?raw'
import Section        from '@/page/Section.jsx'
import Example        from '@/site/Example.jsx'

const Columns = () =>
  <Section code="columns">
    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        The <code>columns</code> property is used to define which properties
        in the <code>rows</code> you want to display.
      </p>
      <p>
        For simple cases this can be a string containing a whitespace delimited
        list of properties.
      </p>
    </div>
    <Example
      Component={String}
      code={StringSrc}
      caption="columns"
      expand={false}
      undent={2}
    />
    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        The string format is short-hand for specifying an array of strings.
      </p>
    </div>
    <Example
      Component={Array}
      code={ArraySrc}
      caption="columns"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        When a column is defined as a string it is &quot;upgraded&quot; to
        an object in which the string is the <code>field</code> property.
      </p>
    </div>
    <Example
      Component={ArrayField}
      code={ArrayFieldSrc}
      caption="columns"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        The column object will be augmented with some additional properties:{' '}
        <code>id</code> (the same value as the field, for sorting purposes),{' '}
        <code>label</code> used as the label heading and defaulting to a
        capitalised version of the <code>field</code>,
        and <code>type</code> defaulting to <code>string</code>.
      </p>
      <p>
        You can define different values for <code>label</code> and
        <code>type</code> (along with other properties which we&apos;ll get
        into soon).  In this example we set the <code>type</code> of the
        first column to be <code>number</code>.  If you click on the{' '}
        <code>Id</code> column heading in one of the previous example, you
        can see that it&apos;s sorting the rows alphabetically, e.g.{' '}
        10, 101, 102, 103, 11, 12, etc.  Setting the column type to{' '}
        <code>number</code>, as shown in the next example, fixes this problem
        and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20,
        etc.
      </p>
    </div>

    <Example
      Component={ArrayObj}
      code={ArrayObjSrc}
      caption="columns"
      expand={false}
      undent={2}
    />

    {/*
    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An element in the <code>options</code> array can also be an object.
        It should contain a <code>text</code> property which can be a
        string or JSX fragment. A <code>className</code> can be included to
        add a CSS class to the option.
      </p>
      <p>
        The content for an element is rendered using the <code>WithIcon</code>{' '}
        component from{' '}
        <a href="https://abw.github.io/badger-icon/">Badger Icon</a> allowing
        you to include <code>iconLeft</code> and <code>iconRight</code> properties
        to add icons to either side, along with <code>iconLeftClass</code> and{' '}
        <code>iconRightClass</code> to set CSS classes for those icons.
      </p>
    </div>
    <Example
      Component={Complex}
      code={ComplexSrc}
      caption="options"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An object in the <code>options</code> array can have a{' '}
        <code>disabled</code> property set to <code>true</code> to disable
        the option.
      </p>
    </div>
    <Example
      Component={Disabled}
      code={DisabledSrc}
      caption="options"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An object in the <code>options</code> array can have a{' '}
        <code>separator</code> property set to <code>true</code> to create
        a separator.
      </p>
    </div>
    <Example
      Component={Separators}
      code={SepsSrc}
      caption="options"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An object in the <code>options</code> array can have a{' '}
        <code>heading</code> property to create a section heading.
      </p>
    </div>
    <Example
      Component={Headings}
      code={HeadingsSrc}
      caption="options"
      expand={false}
      undent={2}
    />
    */}
  </Section>

export default Columns