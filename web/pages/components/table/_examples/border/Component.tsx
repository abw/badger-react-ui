import { Table } from '@/src/index'
import { head, body } from '../spinal-tap'

const TableExample = () =>
  /* START */
  <Table
    border={2}
    celled striped
    head={head}
    body={body}
  />
  /* END */

export default TableExample