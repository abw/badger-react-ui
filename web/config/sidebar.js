const GettingStarted = {
  title:  'Getting Started',
  openPath: '/getting-started',
  revealable: true,
  menu: [
    { to: '/getting-started/installation',     text: 'Installation' },
  ]
}

const Components = {
  title:  'Components',
  openPath: '/components',
  revealable: true,
  menu: [
    {
      to: '/components/accordion',
      text: 'Accordion',
    },
    {
      to: '/components/alert',
      text: 'Alert',
    },
    {
      to: '/components/badge',
      text: 'Badge',
    },
    {
      to: '/components/button',
      text: 'Button',
    },
    {
      to: '/components/buttons',
      text: 'Buttons',
    },
    {
      to: '/components/checkbox',
      text: 'Checkbox',
    },
    {
      to: '/components/confirm',
      text: 'Confirm',
    },
    {
      to: '/components/datatable',
      text: 'DataTable',
    },
    {
      to: '/components/datatables',
      text: 'DataTables',
    },
    {
      to: '/components/details',
      text: 'Details',
    },
    {
      to: '/components/dropdown',
      text: 'Dropdown',
    },
    {
      to: '/components/dropdown-menu',
      text: 'Dropdown Menu',
    },
    {
      to: '/components/form',
      text: 'Form',
    },
    {
      to: '/components/icon',
      text: 'Icon',
    },
    {
      to: '/components/modal',
      text: 'Modal',
    },
    {
      to: '/components/multiselect',
      text: 'MultiSelect',
    },
    {
      to: '/components/overlay',
      text: 'Overlay',
    },
    {
      to: '/components/pager',
      text: 'Pager',
    },
    {
      to: '/components/radio',
      text: 'Radio',
    },
    {
      to: '/components/range',
      text: 'Range',
    },
    //{
    //  to: '/components/range-min-max',
    //  text: 'RangeMinMax',
    //},
    {
      to: '/components/range-max',
      text: 'RangeMax',
    },
    {
      to: '/components/range-min',
      text: 'RangeMin',
    },
    {
      to: '/components/search',
      text: 'Search',
    },
    {
      to: '/components/select',
      text: 'Select',
    },
    {
      to: '/components/sortable',
      text: 'Sortable',
    },
    {
      to: '/components/spinner',
      text: 'Spinner',
    },
    {
      to: '/components/table',
      text: 'Table',
    },
    {
      to: '/components/tabset',
      text: 'Tabset',
    },
    {
      to: '/components/tiles',
      text: 'Tiles',
    },
    {
      to: '/components/toggle',
      text: 'Toggle',
    },
  ]
}

const Elements = {
  title:  'Elements',
  openPath: '/elements',
  revealable: true,
  menu: [
    {
      to: '/elements/div',
      text: 'Div',
    },
    {
      to: '/elements/flex',
      text: 'Flex',
    },
    {
      to: '/elements/grid',
      text: 'Grid',
    },
  ]
}

const Utilities = {
  title:  'Utilities',
  openPath: '/utilities',
  revealable: true,
  menu: [
    {
      to: '/utilities/classes',
      text: 'CSS Classes',
    },
    {
      to: '/utilities/debugFunction',
      text: 'debugFunction',
    },
    {
      to: '/utilities/storage',
      text: 'Storage',
    },
    {
      to: '/utilities/with-icons',
      text: 'WithIcons',
    },
  ]
}

const Hooks = {
  title:  'Hooks',
  openPath: '/hooks',
  revealable: true,
  menu: [
    {
      to: '/hooks/useComplexState',
      text: 'useComplexState',
    },
    {
      to: '/hooks/useContainer',
      text: 'useContainer',
    },
    {
      to: '/hooks/useCursor',
      text: 'useCursor',
    },
    {
      to: '/hooks/useFloating',
      text: 'useFloating',
    },
    {
      to: '/hooks/useRenderCount',
      text: 'useRenderCount',
    },
    {
      to: '/hooks/useSignal',
      text: 'useSignal',
    },
    {
      to: '/hooks/useTrigger',
      text: 'useTrigger',
    },
    {
      to: '/hooks/useWindow',
      text: 'useWindow',
    },
  ]
}

const Theming = {
  title:  'Theming',
  openPath: '/theming',
  revealable: true,
  menu: [
    {
      to: '/theming/theme-provider',
      text: 'Theme Provider',
    },
    {
      to: '/theming/theming-function',
      text: 'Theming Function',
    },
    {
      to: '/theming/themedProps',
      text: 'themedProps',
    },
  ]
}

const DevTests = {
  title:  'Developer Tests',
  openPath: '/testing',
  revealable: true,
  menu: [
    {
      to: '/testing/datatable-columns',
      text: 'DataTable Columns',
    },
    {
      to: '/testing/datatable-select',
      text: 'DataTable Select',
    },
    {
      to: '/testing/datatable-page-reset',
      text: 'DataTable Rows',
    },
    {
      to: '/testing/accordion-select',
      text: 'Accordion Select',
    },
    {
      to: '/testing/dynamic-select',
      text: 'Dynamic Select',
    },
    {
      to: '/testing/select-opacity',
      text: 'Select Opacity',
    },
    {
      to: '/testing/range',
      text: 'Range',
    },
    {
      to: '/testing/range-events',
      text: 'Range Events',
      tocName: 'range-events',
    },
    {
      to: '/testing/range-options',
      text: 'Range Options',
      tocName: 'range-options',
    },
  ]
}

const sidebar = {
  sections: [
    GettingStarted,
    Components,
    Elements,
    Utilities,
    Hooks,
    Theming,
    ...(
      import.meta.env.DEV
        ? [ DevTests ]
        : [ ]
    )
  ]
}

export default sidebar