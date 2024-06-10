import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import DescTable from '@/web/site/DescTable.jsx'

const Pager = () =>
  <>
    <h2>Context</h2>
    <p>
      A react context is created which provides the items listed below.
      Any other properties passed in to the component will also be
      accessible to child components.
    </p>
    <p>
      Values are provided for the 0-based indexes of the first, last,
      previous, next and current pages.
      For example, the lowest value for <code>page</code> is{' '}
      <code>0</code> and the highest value is <code>pages - 1</code>.
      Their counterparts are also provided in &quot;human readable&quot;
      1-based form with a <code>No</code> suffix.  For example, the values
      for <code>pageNo</code> range from <code>1</code> to <code>pages</code>,
      and will always be one more than <code>page</code>.
    </p>
    <DescTable
      items={[
        ['pages',   'The total number of pages, as passed into the component as a property.'],
        ['page',    'The index (0 based) of the current page, as passed into the component as a property.'],
        ['setPage', 'The function for setting a page index, as passed into the component as a property.'],
        ['pageNo',  'The current page number (1 based), effectively one louder than `page`.  e.g. if `page` is ten then this goes up to eleven.' ],
        ['firstPage',  'The index (0 based) of the first page.  This is always 0 but is included for completeness.'],
        ['firstPageNo',  'The number (1 based) of the first page.  This is always 1 but is included for completeness.'],
        ['lastPage',     'The index (0 based) of the last page.'],
        ['lastPageNo',   'The number (1 based) of the first page.'],
        ['prevPage',     'The index (0 based) of the previous page.'],
        ['prevPageNo',   'The number (1 based) of the previous page.'],
        ['nextPage',     'The index (0 based) of the next page.'],
        ['nextPageNo',   'The number (1 based) of the next page.'],
      ]}
    />

    <h2>Custom Components</h2>
    <p>
      You can provide your own components to render certain elements
      of the pager widget. These will be passed relevant parameters as
      properties and can use the <code>usePager()</code> hook
      to access the full pager context, including any additional properties
      that you pass to the <code>Pager</code> component.
    </p>
    <p>
      In this example we define a custom <code>MyPageButton</code> component
      to replace the <code>Page</code> component that renders the numbered
      page buttons.  Instead of displaying page numbers it shows alphabetical
      ranges for each button, defined in a custom <code>pageRanges</code> {' '}
      property.
    </p>

    <Example
      Component={Component}
      code={Source}
      highlightLines="4-18,34"
      // expand
    />
  </>

export default Pager