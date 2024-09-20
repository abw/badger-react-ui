import React       from 'react'
import { Section } from '@abw/badger-website'

const SetOrder = () =>
  <Section code="setOrder">
    A function which will be called when the order of items changes.
    It will be pass an array containing the <code>items</code> in the
    new order.
  </Section>

export default SetOrder