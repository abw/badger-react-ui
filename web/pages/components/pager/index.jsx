import React      from 'react'
import Pager      from './_examples/Pager/index.jsx'
import Context    from './_examples/Context/index.jsx'
import ClassName  from './_examples/className/index.jsx'
import Color      from './_examples/color/index.jsx'
import Size       from './_examples/size/index.jsx'
import PrevIcon   from './_examples/prevIcon/index.jsx'
import NextIcon   from './_examples/nextIcon/index.jsx'
import FirstLast  from './_examples/showFirstLast/index.jsx'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Section    from '@/web/page/Section.jsx'
import Split      from '@/web/site/Split.jsx'

const PagerExamples = () =>
  <div className="flow">
    <h1>Pager</h1>
    <Pager/>
    <Context/>
    <Sections tocName="pager">
      <Heading title="Properties"/>
      <ClassName/>
      <Color/>
      <Size/>
      <PrevIcon/>
      <NextIcon/>
      <FirstLast/>
      <Split>
        <div className="flow">
          <Heading title="CSS Classes"/>
          <Section code="className">
            Used to set the CSS class for the pager container.  The default
            value is <code>pager</code>.
          </Section>
          <Section code="buttonClass">
            Used to set a default CSS class for all buttons.  The default
            value is <code>outline</code>.
          </Section>
          <Section code="prevClass">
            Used to set the CSS class for the previous page button.  It defaults
            to the value for <code>buttonClass</code>.
          </Section>
          <Section code="nextClass">
            Used to set the CSS class for the next page button.  It defaults to
            the value for <code>buttonClass</code>.
          </Section>
          <Section code="pagesClass">
            Used to set the CSS class for the numbered page buttons container.
            The default value is <code>pages</code>.
          </Section>
          <Section code="pageClass">
            Used to set the CSS class for individual numbered page buttons.  It
            defaults to the value for <code>buttonClass</code>.
          </Section>
          <Section code="currentPageClass">
            Used to set the CSS class for the currently selected numbered page
            button. The default value is <code>solid</code>.
          </Section>
        </div>
        <div className="flow">
          <Heading title="Components"/>
          <Section code="Previous" id="Previous-component">
            Renders the previous page button.  Defaults
            to <code>PagerPrevious</code>.
          </Section>
          <Section code="Next" id="Next-component">
            Renders the next page button.  Defaults
            to <code>PagerNext</code>.
          </Section>
          <Section code="Pages" id="Pages-component">
            Renders the collection of numbered page buttons.  Defaults
            to <code>PagerPages</code>.
          </Section>
          <Section code="Page" id="Page-component">
            Renders an individual page button.  Defaults
            to <code>PagerPage</code>.
          </Section>
          <Section code="Separator" id="Separator-component">
            Renders the separator between the first and/or last pages and the
            rest of the numbered page buttons. Defaults to <code>PagerSeparator</code>.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default PagerExamples