interface PlugMeta {
  [key: string]: any;
}

export type Reducer = <T, U extends any[]>(initial: T, ...args: U) => T;
export type Decorator = <T, U extends any[]>(initial: T, ...args: U) => void;

export type UseReduceOptions = Reducer;
export type UseInstanceAfterState = Decorator;
export type UseReduceColumns = Reducer; // Array<Column>;
export type UseReduceAllColumns = Reducer; // Array<Column>;
export type UseReduceLeafColumns = Reducer; // Array<Column>;
export type DecorateColumn = Decorator; // Column;
export type UseReduceHeaderGroups = Reducer; // Array<HeaderGroup>;
export type UseReduceFooterGroups = Reducer; // Array<FooterGroup>;
export type UseReduceFlatHeaders = Reducer; // Array<Header>;
export type DecorateHeader = Decorator; // Header;
export type DecorateRow = Decorator; // Row;
export type DecorateCell = Decorator; // Cell;
export type UseInstanceAfterDataModel = Decorator; // Instance;
export type ReduceTableProps = Reducer; // TableProps;
export type ReduceTableBodyProps = Reducer; // TableBodyProps;
export type ReduceTableHeadProps = Reducer; // TableHeadProps;
export type ReduceTableFootProps = Reducer; // TableFootProps;
export type ReduceHeaderGroupProps = Reducer; // HeaderGroupProps;
export type ReduceFooterGroupProps = Reducer; // FooterGroupProps;
export type ReduceHeaderProps = Reducer; // HeaderProps;
export type ReduceRowProps = Reducer; // RowProps;
export type ReduceCellProps = Reducer; // CellProps;

type AfterList = Array<string>;

export interface PlugObj<T> {
  plug: T;
  after: AfterList;
}

export type PluginPlug<T> = PlugObj<T> | T;

export type PlugName = keyof InstancePlugs;

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
  state: State;
}

export interface State {}

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
