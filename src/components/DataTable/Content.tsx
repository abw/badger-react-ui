import Context          from './Context'
import DataTableHeader  from './Header'
import DataTableBody    from './Body'
import DataTableFooter  from './Footer'

export const DataTableContent = Context.Consumer(
  ({
    contentClass,
    Header=DataTableHeader,
    Body=DataTableBody,
    Footer=DataTableFooter,
  }) =>
    <section className={contentClass}>
      <Header/>
      <Body/>
      <Footer/>
    </section>
)

export default DataTableContent