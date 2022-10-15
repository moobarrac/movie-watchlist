import React, { useContext } from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({movie, type}) => {
  const {removeMovieToWatchlist, addMovieToWatched, addWatchedToWatchlist, removeMovieFromWatched} = useContext(GlobalContext)
  return (
    <div className='inner-card-controls'>
      {
        type === 'watchlist' &&
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <AiFillEye/>
          </button>
          <button className='ctrl-btn' onClick={() => removeMovieToWatchlist(movie.id)}>
            <FaTimes />
          </button>
        </>
      }
      {
        type === 'watched' &&
        <>
          <button className='ctrl-btn' onClick={() => addWatchedToWatchlist(movie)}>
            <AiFillEyeInvisible/>
          </button>
          <button className='ctrl-btn' onClick={() => removeMovieFromWatched(movie.id)}>
            <FaTimes />
          </button>
        </>
      }
    </div>
  )
}

export default MovieControls