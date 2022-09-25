import React, { useState } from 'react'

const AddPage = () => {
  const [search, setSearch] = useState('')
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type="text"
              placeholder='Enter movie name'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPage