import React from 'react';
import DashboardView from './DashboardView';
import firebase from '../../services/Firebase/Firebase';
import { IDashboardState, IGraphData } from './Dashboard.types';

export default class Dashboard extends React.Component<any, IDashboardState> {
  firebaseRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

  constructor(props: React.ReactPropTypes) {
    super(props);
    this.firebaseRef = firebase.firestore().collection('reading_logs');
    this.state = {
      bookData: [],
    };
  }

  componentDidMount() {
    this.firebaseRef.onSnapshot(this.onReadingCollectionUpdate);
  }

  onReadingCollectionUpdate = (querySnapshot: any) => {
    // Whenever the db collection is updated, fire this method and update the state.
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
      });
    });
  };

  formatBookDataForGraphs(): IGraphData[] {
    const sortedBooks = this.state.bookData.sort((a, b) => a.dateRead.localeCompare(b.dateRead));

    const resultsObj: any = {};
    const resultsArray: any = [];
    sortedBooks.forEach(elem => {
      if (resultsObj.hasOwnProperty(elem.bookName)) {
        resultsObj[elem.bookName].labels.push(elem.dateRead);
        resultsObj[elem.bookName].data.push(elem.minutesRead);
      } else {
        resultsObj[elem.bookName] = {
          labels: [elem.dateRead],
          data: [elem.minutesRead],
          title: `Minutes Read Per Day - ${elem.bookName}`,
        };
      }
    });
    Object.keys(resultsObj).forEach(function(key) {
      resultsArray.push({
        title: resultsObj[key].title,
        data: resultsObj[key].data,
        labels: resultsObj[key].labels,
      });
    });
    return resultsArray;
  }

  render() {
    return <DashboardView ListGraphData={this.formatBookDataForGraphs()} />;
  }
}
