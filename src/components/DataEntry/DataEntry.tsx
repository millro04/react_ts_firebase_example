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
    date: '2020-02-01', book_name: 'Harry Potter 1', min_read: 60
  },
  {
    date: '2020-02-01', book_name: 'Harry Potter 2', min_read: 30
  }
];

interface IDataEntryState {
  bookData: any,
}

export default class DataEntry extends React.Component<any, IDataEntryState> {
  constructor(props: React.ReactPropTypes) {
      super(props);
      this.state = {bookData: null};
  }

  componentDidMount() {
    this.getBookData();
  }

  getBookData() {
    this.setState({bookData: tableData});
  }

  render() {
    return (
      <DataEntryView columns={columns} tableData={this.state.bookData}/>
    );
  }
}