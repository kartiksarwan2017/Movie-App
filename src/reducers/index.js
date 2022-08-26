import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT } from '../actions';
import { combineReducers } from 'redux';

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMoviesState, action){
  // // fetch movies and save in store, for now we are getting it from a file
  // // later we will get it from an API
    // if(action.type === ADD_MOVIES){
//   // movies coming from action obj, explain we can add any props to action obj
    //     return {

    //         ...state, 
    //         list: action.movies
    //     }    // returning a new array not changing in state
    // }


// // if no action type matches
    // return state;

    // console.log('MOVIES REDUCER');

    switch(action.type){

        case ADD_MOVIES: 
            return {
                ...state,
                list: action.movies
            }  // returning a new array not changing in state

        case ADD_TO_FAVOURITES:
            return {

                ...state,
                favourites: [action.movie, ...state.favourites]

            }

        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
              
            return {
                ...state,
                favourites: filteredArray
            };

        case SET_SHOW_FAVOURITES:
            return {

                ...state,
                showFavourites: action.val

            }    
         
        case ADD_MOVIE_TO_LIST:
            return {
              
                ...state,
                list: [action.movie, ...state.list]
                
            };    

        default: 
        return state;
    }

}

const initialSearchState = {
    result: {},   // for title parameter
    // result: [], for Search Parameter 
    showSearchResults: false
}

export function search(state = initialSearchState, action){

    switch(action.type){

        case ADD_SEARCH_RESULT: 

           return {
             ...state,
             result: action.movie,
             showSearchResults: true
           }


        case ADD_MOVIE_TO_LIST:
            return {
              
                ...state,
                showSearchResults: false
                
            };      

        
        default: 
        return state;
    }

}


const initialRootState = {
    movies: initialMoviesState,
    search: []
}

// export default function rootReducer (state = initialRootState, action){

//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     } 
// }

export default combineReducers({
    //  movies: movies,
    //  search: search

    movies,
    search
});


// var o = {a:1, b:2, c:3}
// undefined
// var o1 = {...o }
// undefined
// o1
// {a: 1, b: 2, c: 3}
// o1 === o
// false
// var o2 = {...o, b: 100}
// undefined
// o2
// {a: 1, b: 100, c: 3}
