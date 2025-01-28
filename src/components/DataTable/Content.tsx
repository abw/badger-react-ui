import React            from 'react'
import Context          from './Context'
import DataTableHeader  from './Header'
import DataTableBody    from './Body'
import DataTableFooter  from './Footer'
import { classes }      from '@/src/utils/classes'
import { DATATABLE }    from './Constants'

const Content = ({
  color,
  className=DATATABLE,
  Header=DataTableHeader,
  Body=DataTableBody,
  Footer=DataTableFooter,
}) =>
  <section className={classes(className, color)}>
    DATATABLE
    {/* <Header/> */}
    {/* <Body/> */}
    {/* <Footer/> */}
  </section>

export const DataTableContent = Context.Consumer(Content)
export default DataTableContent