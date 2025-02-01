import { Table } from '@/src/index'
import { head, body } from '../spinal-tap'

const TableExample = () =>
  /* START */
  <Table
    radius={3}
    celled striped
    head={head}
    body={body}
  />
  /* END */

export default TableExample