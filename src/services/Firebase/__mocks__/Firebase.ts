// Sample Firebase mock used for testing
// See: https://stackoverflow.com/questions/52043886/how-do-you-mock-firebase-firestore-methods-using-jest

const docData = { data: "MOCK_DATA" };
const docResult = {
  // simulate firestore get doc.data() function
  data: () => docData
};
const get = jest.fn(() => Promise.resolve(docResult));
const firebaseSet = jest.fn(() => Promise.resolve());
const firebaseAdd = jest.fn(() => Promise.resolve());
const firebaseDelete = jest.fn(() => Promise.resolve());
const onSnapshot = jest.fn();

const doc = jest.fn(() => {
  return {
    set: firebaseSet,
    get,
    delete: firebaseDelete
  };
});

const collection = () => {
  return {
    onSnapshot,
    add: firebaseAdd,
    doc
  }
};

const firestore = () => {
  return { collection };
};

export { firestore, firebaseAdd, firebaseDelete, firebaseSet, onSnapshot };