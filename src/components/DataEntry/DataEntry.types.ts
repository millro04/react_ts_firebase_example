import { IBookData } from '../types';

export interface IDataEntryState {
    bookData: IBookData[];
    isLoading: boolean;
}

export interface TableColumn {
  title: string;
  field: string;
}

export interface IDataEntryViewProps {
  columns: TableColumn[];
  tableData: any;
  onRowAdd: any;
  onRowUpdate: any;
  onRowDelete: any;
  isLoading: boolean;
}
