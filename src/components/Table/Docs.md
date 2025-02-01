# Table V2 Plan

```jsx
<Table
  head={['Heading1', 'Heading2']}
  body={[
    ['Value1a', 'Value1b'],
    [{ text: 'Value2a', className: "xxx" }, () => 'Value1b'],
    {
      className: 'some-class',
      cells: ['Value3a', 'Value3b']
    }
  ]}
  foot={{
    className: 'tfoot-class',
    rows: [
      ['Foot1a', 'Foot1b'],
      {
        className: 'bottom',
        cells: ['Foot2a', { text: 'Foot2b', className: 'text-right' }]
      }
    ]
  }}
/>
```

Section (`head`, `body` or `foot`) can be:

* an object containing attributes for the section and `rows`.

* an array of rows

* an array of cells (does this clash with array of rows?)

Row can be:

* an object containing attributes for the row and `cells`

* an array of cells

Cell can be:

* object containing td/th attributes, `th` flag and `text`

* simple value (i.e. Text)

* function returning ReactNode (i.e. Text)

Text can be:

* simple value

* function returning ReactNode (i.e. Text)