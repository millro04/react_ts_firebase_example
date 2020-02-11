import React from 'react';
import DataEntryView from './DataEntryView';
import firebase from '../../services/Firebase/Firebase';
import { IDataEntryState } from './DataEntry.types';


export default class DataEntry extends React.Component<any, IDataEntryState> {
  firebaseRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

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
    // Retrieve data from the database and set component state.
    const bookData: any = [];
    querySnapshot.forEach((doc: any) => {
      const { book_name, date_read, minutes_read } = doc.data();
      bookData.push({
        dateRead: date_read,
        bookName: book_name,
        minutesRead: minutes_read,
        id: doc.id,
      });
      this.setState({
        bookData,
        isLoading: false,
      });
    });
  };

  onRowAdd(newData: any) {
    // Insert new data into the firebase service
    return new Promise((resolve, reject) => {
      try {
        this.firebaseRef
          .add({
            book_name: newData.bookName,
            minutes_read: parseInt(newData.minutesRead),
            date_read: newData.dateRead,
          })
          .then(() => {
            resolve();
          })
          .catch((error: any) => {
            // Display an error to the user here.
            reject(error);
          });
      } catch (e) {
        // Display an error to the user here.
        reject(e);
      }
    });
  }

  onRowUpdate(newData: any, oldData: any) {
    // Update an existing record in the firebase service
    return new Promise((resolve, reject) => {
      try {
        const documentToUpdateRef = this.firebaseRef.doc(oldData.id);
        documentToUpdateRef
          .set({
            date_read: newData.dateRead,
            minutes_read: newData.minutesRead,
            book_name: newData.bookName,
          })
          .then(() => {
            resolve();
          });
      } catch (e) {
        // Display an error to the user here.
        reject(e);
      }
    });
  }

  onRowDelete(oldData: any) {
    // Delete existing record in the database
    return new Promise((resolve, reject) => {
      try {
        this.firebaseRef
          .doc(oldData.id)
          .delete()
          .then(() => {
            resolve();
          });
      } catch (e) {
        // Display an error to the user here.
        reject(e);
      }
    });
  }

  render() {
    const tableColumns = [
      {
        title: 'Date',
        field: 'dateRead',
      },
      {
        title: 'Book',
        field: 'bookName',
      },
      {
        title: 'Minutes Read',
        field: 'minutesRead',
      },
    ];
    return (
      <DataEntryView
        columns={tableColumns}
        tableData={this.state.bookData}
        onRowAdd={this.onRowAdd}
        onRowUpdate={this.onRowUpdate}
        onRowDelete={this.onRowDelete}
        isLoading={this.state.isLoading}
      />
    );
  }
}
