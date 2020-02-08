import React from 'react';
import DataEntryView from './DataEntryView';
import firebase from '../../services/Firebase/Firebase';

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

interface IDataEntryState {
  bookData: any,
  isLoading: boolean
}

export default class DataEntry extends React.Component<any, IDataEntryState> {
  firebaseRef: any;
  constructor(props: React.ReactPropTypes) {
      super(props);
      this.onRowAdd = this.onRowAdd.bind(this);
      this.onRowUpdate = this.onRowUpdate.bind(this);
      this.onRowDelete = this.onRowDelete.bind(this);
      this.state = { bookData: [], isLoading: true };
      this.firebaseRef = firebase.firestore().collection('reading_logs');
  }

  componentDidMount() {
    this.firebaseRef.onSnapshot(this.onReadingCollectionUpdate);
  }

  onReadingCollectionUpdate = (querySnapshot: any) => {
    const bookData: any = [];
    querySnapshot.forEach((doc: any) => {
      const { book_name, date_read, minutes_read } = doc.data();
      bookData.push(
        {
          date: date_read,
          book_name: book_name,
          min_read: minutes_read,
          id: doc.id,
        });
        this.setState({
          bookData,
          isLoading: false,
       });
    });
  }

  onRowAdd(newData: any) {
    return new Promise((resolve, reject) => {
      try {
        this.firebaseRef.add({
          book_name: newData.book_name,
          minutes_read: parseInt(newData.min_read),
          date_read: newData.date,
        }).then((docRef: any) => {
          console.log('Successfully added book data');
          resolve();
        })
        .catch((error: any) => {
          console.error("Error saving reading data: ", error);
          reject();
        });
      }

      catch {
        reject();
      }
  });
  }

  onRowUpdate(newData: any, oldData: any) {
    return new Promise((resolve, reject) => {

      try {
        const updateRef = this.firebaseRef.doc(oldData.id);
        updateRef.set({
          date_read: newData.date,
          minutes_read: newData.min_read,
          book_name: newData.book_name,
        }).then((docRef: any) => {
          console.log('Update successful');
        resolve();
      });
    }
      catch {
        reject();
      }
  });
  }

  onRowDelete(oldData: any) {
    return new Promise((resolve, reject) => {

      try {
        this.firebaseRef.doc(oldData.id).delete().then((docRef: any) => {
        console.log('Delete successful');
        resolve();
      });
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
        isLoading={this.state.isLoading}
        />
    );
  }
}