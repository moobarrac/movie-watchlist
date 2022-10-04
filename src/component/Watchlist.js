import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'

const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext)
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Watchlist</h1>
          <span className='count-pill'>
            {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        <div className='movie-grid'>
          {
            watchlist.length > 0 ? watchlist.map(movie => {
              return <MovieCard movie={movie} type='watchlist'/>
            }) : 
            <div className='no-movies'>No movie in your list, add some!</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Watchlist