import React from 'react';
import DataEntryView from './DataEntryView';

const columns = [
  {
    title: 'Date',
    field: 'date'
  },
  {
    title: 'Book',
    field: 'book_name'
  },
  {
    title: 'Minutes Read',
    field: 'min_read'
  },
];

const tableData = [
  {
    date: '2020-02-01', book_name: 'Harry Potter 1', min_read: 60, id: 0
  },
  {
    date: '2020-02-01', book_name: 'Harry Potter 2', min_read: 30, id: 1
  }
];

interface IDataEntryState {
  bookData: any,
}

export default class DataEntry extends React.Component<any, IDataEntryState> {
  constructor(props: React.ReactPropTypes) {
      super(props);
      this.onRowAdd = this.onRowAdd.bind(this);
      this.onRowUpdate = this.onRowUpdate.bind(this);
      this.onRowDelete = this.onRowDelete.bind(this);
      this.state = {bookData: null};
  }

  componentDidMount() {
    this.getBookData();
  }

  getBookData() {
    this.setState({bookData: tableData});
  }

  onRowAdd(newData: any) {
    return new Promise((resolve, reject) => {

      try {
        const data = this.state.bookData;
        data.push(newData);
        this.setState({ bookData: data });
        resolve();
      }

      catch {
        reject();
      }
  });
  }

  onRowUpdate(newData: any, oldData: any) {
    return new Promise((resolve, reject) => {

      try {
        const data = this.state.bookData;
        data[newData.id] = newData;
        this.setState({ bookData: data });
        resolve();
      }

      catch {
        reject();
      }
  });
  }

  onRowDelete(oldData: any) {
    return new Promise((resolve, reject) => {

      try {
        let data = this.state.bookData;
        const index = data.indexOf(oldData);
        data.splice(index, 1);
        this.setState({ bookData: data });
        resolve();
      }

      catch {
        reject();
      }
  });
  }

  render() {
    return (
      <DataEntryView
        columns={columns}
        tableData={this.state.bookData}
        onRowAdd={this.onRowAdd}
        onRowUpdate={this.onRowUpdate}
        onRowDelete={this.onRowDelete}
        />
    );
  }
}