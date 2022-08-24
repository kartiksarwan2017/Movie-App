import { ADD_MOVIES, ADD_FAVOURITE } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}

export default function movies(state = initialMoviesState, action){

    // if(action.type === ADD_MOVIES){
    //     return {

    //         ...state, 
    //         list: action.movies
    //     }
    // }

    // return state;


    switch(action.type){

        case ADD_MOVIES: 
            return {
                ...state,
                list: action.movies
            }

        case ADD_FAVOURITE:
            return {

                ...state,
                favourites: [action.movie, ...state.favourites]

            }

        default: 
        return state;
    }

}


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
