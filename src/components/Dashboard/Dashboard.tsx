import React from 'react';
import DashboardView from './DashboardView';
import firebase from '../../services/Firebase/Firebase';

interface IBookData {
    date: string,
    book_name: string,
    min_read: number, 
}

interface IDashboardState {
    bookData: IBookData[]
}

export default class Dashboard extends React.Component<any, IDashboardState> {

  firebaseRef: any;
  constructor(props: React.ReactPropTypes) {
      super(props);
      this.firebaseRef = firebase.firestore().collection('reading_logs');
      this.state = {
          bookData: []
      }
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
          bookData
       });
    });
  }

  formatBookDataForGraphs() {
    let resultsObj: any = {};
    let resultsArray: any = [];
    this.state.bookData.forEach(
        elem => {
            if (resultsObj.hasOwnProperty(elem.book_name)) {
                resultsObj[elem.book_name].labels.push(elem.date);
                resultsObj[elem.book_name].data.push(elem.min_read);
            } else {
                resultsObj[elem.book_name] = {labels: [elem.date], data: [elem.min_read], title: `Minutes Read Per Day - ${elem.book_name}`}
            }
        });
    Object.keys(resultsObj).forEach(function(key) {
        resultsArray.push(
            {
                title: resultsObj[key].title,
                data: resultsObj[key].data,
                labels: resultsObj[key].labels,

            }
        )
    });
    return resultsArray;
  }

  render() {
    return (
      <DashboardView
        ListGraphData={this.formatBookDataForGraphs()}
        />
    );
  }
}