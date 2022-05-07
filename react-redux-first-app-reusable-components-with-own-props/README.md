# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## `Steps To Add Redux in your application`

### Install Redux library in react app. using below command

- npm install redux react-redux

### Create two folders `redux` and `components`

- create the above two folders inside src folder.
- creare Todo componnent in components folder.

### Create Actions for todos in side redux folder.

- create file TodoActions.js under redux

### Create Action Types for todos in side redux folder.

- create file TodoActionTypes.js under redux


### Create Reducer for todos in side redux folder.

- create file TodoReducer.js under redux

### Create store  in side redux folder.

- create file store.js under redux
- add store as provider in side app.js.
- use store methods in todo.js file using connect function.

### For adding logger middle ware first install the logger middleware package using below command.
- npm install redux-logger.
- add inside store.js file using applymiddleware method.

### For adding redux-devtools first install the package using below command.
-npm install --save redux-devtools-extension

### `To see example in `[Code Sand Box](https://codesandbox.io/s/react-redux-fist-app-6q11yf)

![Above Project UI](assets/example-view.JPG)
