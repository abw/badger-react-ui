export const GettingStartedMenu = {
  title:  'Getting Started',
  path: '/getting-started',
  items: [
    { to: '/getting-started/installation',     text: 'Installation' },
  ]
}

export const ComponentsMenu = {
  title:  'Components',
  path: '/components',
  items: [
    {
      to: '/components/alert',
      text: 'Alert',
      toc: {
        title:        'code:title',
        text:         'code:text',
        headline:     'code:headline',
        headicon:     'code:headIcon',
        revealable:   'code:revealable',
        revealed:     'code:revealed',
        dismissable:  'code:dismissable',
        onDismiss:    'code:onDismiss',
        className:    'code:className',
        border:       'code:border',
        radius:       'code:radius',
        shadow:       'code:shadow',
        size:         'code:size',
        color:        'code:color',
        type:         'code:type',
        info:         'code:Info',
        success:      'code:Success',
        warning:      'code:Warning',
        error:        'code:Error',
      }
    },
    { to: '/components/icon',        text: 'Icon' },
  ]
}
