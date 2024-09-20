import React       from 'react'
import PropsTable  from '@/web/site/PropsTable.jsx'
import { Section } from '@abw/badger-website'

const Components = () =>
  <Section title="Components">
    <p>
      The following sub-components are used.  You can override any component
      by providing a new component as a property.
    </p>
    <PropsTable
      items={[
        ['Content',   'RangeContent',   'Renders the content for the range container'],
        ['Layout',    'RangeLayout',    'The default layout for the range content'],
        ['Debug',     'RangeDebug',     'Debugging component'],
        ['Inputs',    'RangeInputs',    'Renders the inputs'],
        ['InputMin',  'RangeInputMin',  'The input for the minimum value'],
        ['InputMax',  'RangeInputMax',  'The input for the maximum value'],
        ['Limits',    'RangeLimits',    'The limits of the scale'],
        ['Output',    'RangeOutput',    'The output values'],
        ['Select',    'RangeSelection', 'Component to select a minimum or maximum value from discrete `options`'],
        ['Selection', 'RangeSelection', 'The selected range'],
        ['Slider',    'RangeSlider',    'Container for the slider, track and thumbs'],
        ['Thumbs',    'RangeThumbs',    'Renders the thumbs'],
        ['ThumbMin',  'RangeThumbMin',  'The minimum value thumb'],
        ['ThumbMax',  'RangeThumbMax',  'The maximum value thumbs'],
        ['Ticks',     'RangeTicks',     'Renders the ticks and scale values'],
        ['Track',     'RangeTrack',     'The track in which the thumbs and selection site'],
        ['Values',    'RangeValues',    'Renders the current minimum and maximum values'],
        ['ValueMin',  'RangeValueMin',  'The current minimum value'],
        ['ValueMax',  'RangeValueMax',  'The current maximum value'],
      ]}
    />
  </Section>

export default Components