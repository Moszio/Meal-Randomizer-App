const Search = ({ setSearch }) => {
  return (
    <div className='search-bar'>
      <input className='prompt' onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search
