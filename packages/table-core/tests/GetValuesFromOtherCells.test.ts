import { describe, expect, it } from 'vitest'
import {
    createColumnHelper,
    createTable,
    getCoreRowModel
} from '../src'

interface SpreadsheetStyleData {
  item1: number
  item2: number
  item3: number,
}

describe('AccessorFn', () => {
  it('can get the values of other cells', () => {
    const data = Array.from({ length: 5 }, (_, i) => ({
      item1: i,
      item2: i + 1,
      item3: i + 2,
    }))

    const columnHelper = createColumnHelper<SpreadsheetStyleData>()

    const columns = [
      columnHelper.accessor('item1', { id: 'item1' }),
      columnHelper.accessor('item2', { id: 'item2' }),
      columnHelper.accessor('item3', { id: 'item3' }),
      columnHelper.accessor(
        (_1, _2, { row }) =>
          ['item1', 'item2', 'item3']
            .map(key => row.getValue<number>(key))
            .reduce((a, b) => a + b, 0),
        { id: 'summation' }
      ),
    ]

    const table = createTable<SpreadsheetStyleData>({
      onStateChange() {},
      renderFallbackValue: '',
      data,
      getSubRows: row => [],
      state: {},
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
    const rowModel = table.getCoreRowModel()

    expect(rowModel.rows[0].getAllCells()[3].getValue()).toBe(1 + 2 + 3)
    expect(rowModel.rows[1].getAllCells()[3].getValue()).toBe(2 + 3 + 4)
    expect(rowModel.rows[2].getAllCells()[3].getValue()).toBe(3 + 4 + 5)
    expect(rowModel.rows[3].getAllCells()[3].getValue()).toBe(4 + 5 + 6)
    expect(rowModel.rows[4].getAllCells()[3].getValue()).toBe(5 + 6 + 7)
  })
})
