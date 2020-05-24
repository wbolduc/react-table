interface PlugMeta {}

type PlugReducer<T> = (input: T, meta: PlugMeta) => T;
type PlugDecorator<T> = (input: T, meta: PlugMeta) => void;

export type UseReduceOptions = PlugReducer<Options>;
export type UseInstanceAfterState = PlugReducer<Instance>;
export type UseReduceColumns = PlugReducer<Array<Column>>;
export type UseReduceAllColumns = PlugReducer<Array<Column>>;
export type UseReduceLeafColumns = PlugReducer<Array<Column>>;
export type DecorateColumn = PlugDecorator<Column>;
export type UseReduceHeaderGroups = PlugReducer<Array<HeaderGroup>>;
export type UseReduceFooterGroups = PlugReducer<Array<FooterGroup>>;
export type UseReduceFlatHeaders = PlugReducer<Array<Header>>;
export type DecorateHeader = PlugDecorator<Header>;
export type DecorateRow = PlugDecorator<Row>;
export type DecorateCell = PlugDecorator<Cell>;
export type UseInstanceAfterDataModel = PlugReducer<Instance>;
export type ReduceTableProps = PlugReducer<TableProps>;
export type ReduceTableBodyProps = PlugReducer<TableBodyProps>;
export type ReduceTableHeadProps = PlugReducer<TableHeadProps>;
export type ReduceTableFootProps = PlugReducer<TableFootProps>;
export type ReduceHeaderGroupProps = PlugReducer<HeaderGroupProps>;
export type ReduceFooterGroupProps = PlugReducer<FooterGroupProps>;
export type ReduceHeaderProps = PlugReducer<HeaderProps>;
export type ReduceRowProps = PlugReducer<RowProps>;
export type ReduceCellProps = PlugReducer<CellProps>;

type AfterList = Array<string>;

export interface PlugObj<T> {
  plug: T;
  after: AfterList;
}

export type PluginPlug<T> = PlugObj<T> | T;

export interface InstancePlugs {
  useReduceOptions: UseReduceOptions;
  useInstanceAfterState: UseInstanceAfterState;
  useReduceColumns: UseReduceColumns;
  useReduceAllColumns: UseReduceAllColumns;
  useReduceLeafColumns: UseReduceLeafColumns;
  decorateColumn: DecorateColumn;
  useReduceHeaderGroups: UseReduceHeaderGroups;
  useReduceFooterGroups: UseReduceFooterGroups;
  useReduceFlatHeaders: UseReduceFlatHeaders;
  decorateHeader: DecorateHeader;
  decorateRow: DecorateRow;
  decorateCell: DecorateCell;
  useInstanceAfterDataModel: UseInstanceAfterDataModel;
  reduceTableProps: ReduceTableProps;
  reduceTableBodyProps: ReduceTableBodyProps;
  reduceTableHeadProps: ReduceTableHeadProps;
  reduceTableFootProps: ReduceTableFootProps;
  reduceHeaderGroupProps: ReduceHeaderGroupProps;
  reduceFooterGroupProps: ReduceFooterGroupProps;
  reduceHeaderProps: ReduceHeaderProps;
  reduceRowProps: ReduceRowProps;
  reduceCellProps: ReduceCellProps;
}

export interface PluginPlugs {
  useReduceOptions: PlugObj<UseReduceOptions>;
  useInstanceAfterState: PlugObj<UseInstanceAfterState>;
  useReduceColumns: PlugObj<UseReduceColumns>;
  useReduceAllColumns: PlugObj<UseReduceAllColumns>;
  useReduceLeafColumns: PlugObj<UseReduceLeafColumns>;
  decorateColumn: PlugObj<DecorateColumn>;
  useReduceHeaderGroups: PlugObj<UseReduceHeaderGroups>;
  useReduceFooterGroups: PlugObj<UseReduceFooterGroups>;
  useReduceFlatHeaders: PlugObj<UseReduceFlatHeaders>;
  decorateHeader: PlugObj<DecorateHeader>;
  decorateRow: PlugObj<DecorateRow>;
  decorateCell: PlugObj<DecorateCell>;
  useInstanceAfterDataModel: PlugObj<UseInstanceAfterDataModel>;
  reduceTableProps: PlugObj<ReduceTableProps>;
  reduceTableBodyProps: PlugObj<ReduceTableBodyProps>;
  reduceTableHeadProps: PlugObj<ReduceTableHeadProps>;
  reduceTableFootProps: PlugObj<ReduceTableFootProps>;
  reduceHeaderGroupProps: PlugObj<ReduceHeaderGroupProps>;
  reduceFooterGroupProps: PlugObj<ReduceFooterGroupProps>;
  reduceHeaderProps: PlugObj<ReduceHeaderProps>;
  reduceRowProps: PlugObj<ReduceRowProps>;
  reduceCellProps: PlugObj<ReduceCellProps>;
}

export type PlugDef<T> = [keyof InstancePlugs, T];

export interface Plugin {
  name: string;
  after: AfterList;
  plugs: PluginPlugs;
}

export interface UserTableOptions {
  plugins?: Array<Plugin>;
}

export interface Instance {
  plugs: InstancePlugs;
  options: Options;
}

export interface Options {}
export interface Column {}
export interface Header {}
export interface Row {}
export interface Cell {}
export interface HeaderGroup {}
export interface FooterGroup {}
export interface TableProps {}
export interface TableBodyProps {}
export interface TableHeadProps {}
export interface TableFootProps {}
export interface HeaderGroupProps {}
export interface FooterGroupProps {}
export interface HeaderProps {}
export interface RowProps {}
export interface CellProps {}

// Utils

export type ValueOf<T> = T[keyof T];
