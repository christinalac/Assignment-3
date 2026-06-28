function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Search breeds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;