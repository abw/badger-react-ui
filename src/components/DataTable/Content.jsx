import React             from 'react'
import Context           from './Context.js'
import DataTableHeader   from './Header.jsx'
import DataTableBody     from './Body.jsx'
import DataTableFooter   from './Footer.jsx'
import { classes } from '@/src/utils/classes.js'

const Content = ({
  color,
  className='datatable',
  Header=DataTableHeader,
  Body=DataTableBody,
  Footer=DataTableFooter,
}) =>
  <section className={classes(className, color)}>
    <Header/>
    <Body/>
    <Footer/>
  </section>

export const DataTableContent = Context.Consumer(Content)
export default DataTableContent