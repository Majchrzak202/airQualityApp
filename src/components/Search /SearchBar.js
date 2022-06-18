import './SearchBar.css'

const SearchBar = () => {
  return (
    <section className="section-search">
    <div className='searchbar'>
      <form>
        <div>
          <input placeholder='City name'/>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default SearchBar;
