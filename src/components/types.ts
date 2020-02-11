// Shared types across multiple components

export interface IBookData {
  // defining date as a string here, since Firebase Firestore uses a full timestamp.
  // To not deal with conversions, using string for convenience here.
  dateRead: string;
  bookName: string;
  minutesRead: number;
}
