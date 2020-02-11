**Reading Tracker** is a web application designed to keep track of how many minutes I've read for various books. Given the theme of education and classroom technology, along with the fact that I am trying to read more myself, this project seemed like a good fit.

## Build Status
[![CircleCI](https://circleci.com/gh/millro04/reading_tracker.svg?style=svg)](https://circleci.com/gh/millro04/reading_tracker)

## Hosted Here
* https://my-reading-tracker.herokuapp.com/

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
* Pre-commit and pre-push hooks to automatically run tests
* Separation of concerns using presentational components
* React Routing
* Deployed live on Heroku

## Next Steps
Next improvement steps on this repository would be the following:
* Implement login/logout, so each user can have their own book record
    * State Management (Redux)
* Automate creation of Firebase database
* Implement calendar picker on the DataEntry table
* Enhance the Dashboard to include more stats

## Running The App
* `npm install`
* `npm start`

## Testing The App
* `npm test`
* `npm test -- --updateSnapshot`

## Testing With Coverage
* `npm run coverage`