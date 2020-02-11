import React from 'react';
import MaterialTable from 'material-table';
import './DataEntry.css';
import { IDataEntryViewProps } from './DataEntry.types';

const DataEntryView = (props: IDataEntryViewProps) => {
  return (
    <div className="data-entry-wrapper">
      <MaterialTable
        style={{ width: '90%' }}
        columns={props.columns}
        data={props.tableData}
        title="Reading Record"
        editable={{
          onRowAdd: props.onRowAdd,
          onRowUpdate: props.onRowUpdate,
          onRowDelete: props.onRowDelete,
        }}
        isLoading={props.isLoading}
      />
    </div>
  );
}

export default DataEntryView;
