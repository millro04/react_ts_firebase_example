import * as firebase from 'firebase';

// TODO: Would not hard-code these for production.
const config = {
    apiKey: "AIzaSyAJyGhmH2K9QNvYwFu16JVwse8JzN5A0ps",
    authDomain: "readingtracker-ed2b9.firebaseapp.com",
    databaseURL: "https://readingtracker-ed2b9.firebaseio.com",
    projectId: "readingtracker-ed2b9",
    storageBucket: "readingtracker-ed2b9.appspot.com",
    messagingSenderId: "5558996582",
    appId: "1:5558996582:web:6dcc494fca9c321f6be7a7",
    measurementId: "G-4WCDW2XQYE"
};
firebase.initializeApp(config);

firebase.firestore();

export default firebase;