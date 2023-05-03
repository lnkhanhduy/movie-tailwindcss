import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  const handleSubmit = (e) => {
    if (!searchValue) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full flex justify-end right-6 top-7 absolute items-center">
      <form
        onSubmit={handleSubmit}
        id="form-search"
        action={`/movies/search/${searchValue}`}
        method="GET"
        className="flex"
      >
        <div className="bg-white text-red-600 border-red-600 w-7 h-7 flex justify-center items-center border-[1px] pr-[1px] cursor-pointer">
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text" />
          </button>
        </div>
        <input
          id="search"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search..."
          className="h-7 pl-2 rounded-r-[6px] outline-none text-black"
        />
      </form>
    </div>
  );
}

export default Search;
