**Reading Tracker** is a web application designed to keep track of how many minutes I've read for various books. Given the theme of education and classroom technology, along with the fact that I am trying to read more myself, this project seemed like a good fit.

## Hosted Here
* https://serene-oasis-08498.herokuapp.com/

## Features
* Allows a user to perform CRUD operations on their book entries
* Provides a dashboard of graphs for each book

## Technology Used
* ReactJS
* Typescript
* Firebase database
* Git

## Skills Demonstrated
* Perform CRUD operations on resources in an external database
* Unit and snapshot testing on React components
* Testing with Jest and Enzyme
* Continuous Integration via CircleCI on each commit
* Separation of concerns using presentational components
* React Routing
* Deployed live on Heroku

## Next Steps
Next improvement steps on this repository would be the following:
* Implement login/logout flow, so each user can have their own book record
* Automate creation of Firebase database
* Implement calendar picker on the DataEntry table
* Enhance the Dashboard to include more stats - like total minutes read per book, etc.

## Running The App
* `npm install`
* `npm start`

## Testing The App
* `npm test`
* `npm test -- --updateSnapshot`

## Testing With Coverage
* `npm run coverage`