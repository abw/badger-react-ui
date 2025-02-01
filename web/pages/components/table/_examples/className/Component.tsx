import { Table } from '@/src/index'
import { head, body } from '../spinal-tap'

const TableExample = () =>
  /* START */
  <Table
    className="red celled striped square shadow-1"
    head={head}
    body={body}
  />
  /* END */

export default TableExample