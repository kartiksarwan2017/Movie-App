import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_MOVIE_TO_LIST } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMoviesState, action){

    // if(action.type === ADD_MOVIES){
    //     return {

    //         ...state, 
    //         list: action.movies
    //     }
    // }

    // return state;

    console.log('MOVIES REDUCER');

    switch(action.type){

        case ADD_MOVIES: 
            return {
                ...state,
                list: action.movies
            }

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
    result: {}
}

export function search(state = initialSearchState, action){

    console.log('SEARCH REDUCER');

    return state;

}


const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
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
