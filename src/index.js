import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';
import './index.css';

// function logger(obj, next, action)
// logger(obj)(next)(action)

// const logger = function({dispatch, getState}) {
//     return function (next) {
//       return function(action){
//         // Middleware code
//         console.log('ACTION', action);
//         next(action);
//       }
//     }
// }


const logger = ({dispatch, getState}) => (next) => (action) => {
  // my middleware
    console.log('ACTION', action);
    next(action);
  
}


// const thunk = store => (next) => (action) => {
//   // logger code

//   if(typeof action === 'function'){
//     return action(store.dispatch);
//     
//   }

//   next(action);
  
// }


const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store);
console.log('state', store.getState());
// console.log('BEFORE STATE', store.getState());

export const StoreContext = createContext();

console.log('StoreContext', StoreContext);

class Provider extends React.Component{
  render() {

    const {store} = this.props;

    return (
      <StoreContext.Provider value={store}>

      {this.props.children}

    </StoreContext.Provider>  
    ); 

  }
}
// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: movieList
// });

// console.log('AFTER STATE', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store= {store}>
    
      <App />

    </Provider>


);


