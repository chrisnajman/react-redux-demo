# React/Redux Demo

Very simple demo to clarify and demonstrate the function of each file (store.js, root-reducer.js, etc, etc.)

## Setup
`git clone git@github.com:chrisnajman/react-redux-demo.git`

`cd react-redux-demo`

`npm install`


![React/Redux Demo Diagram](https://chris-najman.co.uk/react-redux-demo-diagram/redux-demo-diagram.png)

## Note
In *store.js* you'll find the following code:

```
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

```

`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` is optional. It's used to enable Redux Dev Tools, available from the Chrome Store.

If you don't want to use it, rewrite the *store.js* code as:

`const store = createStore(rootReducer)`

