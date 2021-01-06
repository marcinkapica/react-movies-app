function Search(props) {
  const handleFilterTextChange = (e) => {
    props.onFilterTextChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="text-2xl">
      <input
        className="w-full border-shamrock-500 border-solid border-2 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-shamrock-400 focus:ring-opacity-75"
        type="text"
        placeholder="Search..."
        onChange={handleFilterTextChange}
      />
    </form>
  );
}

export default Search;
