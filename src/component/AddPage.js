import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'

const AddPage = () => {
  const API_KEY = '8c0a105c23c82cdb946e4909ea6c5007'
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const onChange = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => {
        if(!data.errors) {
          setResults(data.results)
        }
        else {
          setResults([])
        }
      })
  }

  useEffect(() => {
    getMovies()
  }, [search])

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type="text"
              placeholder='Enter movie name'
              value={search}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddPage