function SearchBar({ onSearch, onFilter }) {

  const onInputChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="search-bar-container">
      <input onChange={onInputChange} style={{ width: '70%', margin: '1rem' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1em' }}>
        <div>
          <label style={{ marginRight: '1em' }}>Filter by Platform</label>
          <select>
            <option>PC (Windows)</option>
            <option>Web Browser</option>
          </select>
        </div>

        <div>
          <label style={{ marginRight: '1em' }}>Filter by Category</label>
          <input />
        </div>

        <div>
          <label style={{ marginRight: '1em' }}>Sort By</label>
          <select>
            <option value='release-date'>Release Date</option>
            <option value='alphabetical'>Alphabetical</option>
            <option value='relevance'>Relevance</option>
          </select>
        </div>
      </div>

    </div >
  )
}

export default SearchBar