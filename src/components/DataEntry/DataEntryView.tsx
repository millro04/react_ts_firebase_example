import React from 'react';
import MaterialTable from 'material-table';
import './DataEntry.css';

interface TableColumn {
  title: string,
  field: string
}

interface IDataEntryViewProps {
  columns: TableColumn[],
  tableData: any,
  onRowAdd: any,
  onRowUpdate: any,
  onRowDelete: any,
  isLoading: boolean
}

export default class DataEntryView extends React.Component<IDataEntryViewProps, any> {
  constructor(props : IDataEntryViewProps) {
    super(props);
  }

  render() {
    return (
      <div className='data-entry-wrapper'>
        <MaterialTable
          style={{ width: '90%' }}
          columns={this.props.columns}
          data={this.props.tableData}
          title="Reading Record"
          editable={{
            onRowAdd: this.props.onRowAdd,
            onRowUpdate: this.props.onRowUpdate,
            onRowDelete: this.props.onRowDelete
          }}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}