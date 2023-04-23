import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  return (
    <div className="absolute flex justify-end right-6 top-7 items-center">
      <div className="bg-white text-red-600 border-red-600 w-7 h-7 flex justify-center items-center border-[1px] pr-[1px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text" />
      </div>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="h-7 pl-2 rounded-r-[6px] outline-none text-black"
      />
    </div>
  );
}

export default Search;
