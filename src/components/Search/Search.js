import './Search.css';

function Search(props) {
  const handleFilterTextChange = (e) => {
    props.onFilterTextChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="Search-form">
      <input
        className="Search-input"
        type="text"
        placeholder="Search..."
        onChange={handleFilterTextChange}
      />
    </form>
  );
}

export default Search;
