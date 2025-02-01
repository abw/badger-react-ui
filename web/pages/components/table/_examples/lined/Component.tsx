import { Table } from '@/src/index'
import { head, body } from '../spinal-tap'

const TableExample = () =>
  /* START */
  <Table
    lined
    head={head}
    body={body}
  />
  /* END */

export default TableExample