function SearchBar({ onSearch, onFilter }) {

  const onSearchInput = (e) => {
    onSearch(e.target.value)
  }

  const onPlatformSelect = (e) => {
    console.log(e.target.value)
  }

  const onCategoryInput = (e) => {
    console.log(e.target.value)
  }

  const onSortSelect = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="search-bar-container">
      <input onChange={onSearchInput} style={{ width: '70%', margin: '1rem' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1em' }}>
        <div>
          <label style={{ marginRight: '1em' }}>Filter by Platform</label>
          <select onChange={onPlatformSelect} defaultValue='pc'>
            <option value='pc'>PC (Windows)</option>
            <option value='browser'>Web Browser</option>
          </select>
        </div>

        <div>
          <label style={{ marginRight: '1em' }}>Filter by Category</label>
          <input onChange={onCategoryInput} />
        </div>

        <div>
          <label style={{ marginRight: '1em' }}>Sort By</label>
          <select onChange={onSortSelect} defaultValue='release-date'>
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