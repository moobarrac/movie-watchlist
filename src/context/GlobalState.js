import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// inital state
const initialState = {
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
}

//create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  //actions
  const addMovieToWatchlist = movie => {
    dispatch({type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie})
  }
  const addWatchedToWatchlist = movie => {
    dispatch({type: 'MOVE_WATCHED_TO_WATCHLIST', payload: movie})
  }
  const addMovieToWatched = movie => {
    dispatch({type: 'ADD_MOVIE_TO_WATCHED', payload: movie})
  }
  const removeMovieToWatchlist = id => {
    dispatch({type: 'REMOVE_MOVIE_TO_WATCHLIST', payload: id})
  }
  const removeMovieFromWatched = id => {
    dispatch({type: 'REMOVE_MOVIE_TO_WATCHED', payload: id})
  }


  return (
    <GlobalContext.Provider
      value={{
        watched: state.watched,
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeMovieToWatchlist,
        addMovieToWatched,
        removeMovieFromWatched,
        addWatchedToWatchlist
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}