import React             from 'react'
import Context           from './Context.js'
import DatatableHeader   from './Header.jsx'
import DatatableBody     from './Body.jsx'
import DatatableFooter   from './Footer.jsx'
import DatatableControls from './Controls.jsx'
import { classes } from '@/src/utils/classes.js'

const Content = ({
  color,
  className='datatable',
  Header=DatatableHeader,
  Body=DatatableBody,
  Footer=DatatableFooter,
  Controls=DatatableControls,
}) =>
  <section className={classes(className, color)}>
    <Header/>
    <Body/>
    <Footer/>
    <Controls/>
  </section>

export const DatatableContent = Context.Consumer(Content)
export default DatatableContent