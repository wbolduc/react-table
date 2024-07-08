---
title: Grouping Guide
---

## Examples

Want to skip to the implementation? Check out these examples:

- [grouping](../../framework/react/examples/grouping)

## API

[Grouping API](../../api/features/grouping)

## Grouping Guide

There are 3 table features that can reorder columns, which happen in the following order:

1. [Column Pinning](../column-pinning) - If pinning, columns are split into left, center (unpinned), and right pinned columns.
2. Manual [Column Ordering](../column-ordering) - A manually specified column order is applied.
3. **Grouping** - If grouping is enabled, a grouping state is active, and `tableOptions.groupedColumnMode` is set to `'reorder' | 'remove'`, then the grouped columns are reordered to the start of the column flow.
