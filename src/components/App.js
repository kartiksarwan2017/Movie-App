import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from '../actions';
import { data as moviesList } from "../data";

class App extends React.Component {

  componentDidMount(){

   this.props;
    store.subscribe(() => {

      console.log('UPDATED');
      this.forceUpdate();

    });

    // make API call
    // dispatch action
    this.props.store.dispatch(addMovies(moviesList));


    // console.log('STATE', this.props.store.getState());

  }

  isMovieFavourite = (movie) => {

    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);


    if(index !== -1){

      // found the movie
      return true;
    }

    return false;

  }


  onChangeTab = (val) =>{
    this.props.store.dispatch(setShowFavourites(val));
  }


  render(){
    const {movies, search} = this.props.store.getState(); // {movies: {}, search :{}}

    console.log('movies', movies);

    const { list, favourites = [], showFavourites= [] } = movies; 
    
    // console.log('RENDER', this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;

    return (
      <>
        <div className="App">
          <Navbar dispatch={this.props.store.dispatch} search= {search} />
          <div className="main">
            <div className="tabs">


              <div 
              className= {`tab ${showFavourites ? '' : 'active-tabs'}`} 
              onClick= {() => this.ChangeTab(false)} >Movies</div>


              <div className= 
              {`tab ${showFavourites ? 'active-tabs': ''}`}  
              onClick= {()=> this.ChangeTab(true)} >Favourites</div>
            </div>
  
            <div className="list">
              {displayMovies.map(movie => {
               <MovieCard 
                movie={movie} 
                key = {movie.imdbID} 
                dispatch = {this.props.store.dispatch}
                isFavourite = {this.isMovieInFavourites(movie)}
                />
              })}

            {displayMovies.length === 0 ? (<div className="no-movies"> No movies to display! </div>) : null}
            </div>
          </div>
        </div>
      </>
    );

  }

 
}

export default App;
