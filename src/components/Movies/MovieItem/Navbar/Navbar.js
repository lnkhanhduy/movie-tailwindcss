import { Link } from 'react-router-dom';
import Search from '../Search/Search';

function Navbar() {
  return (
    <div className="flex justify-between py-7 px-12 text-[16px] text-[#f5f5f5] font-[500] bg-black">
      <Link to={'/'} className="mr-[12%] hover:border-b-[1px] pb-[2px] border-[#adff2f] ">
        Home
      </Link>
      <Link to={'/movies/most_pop_movies'} className="mr-[12%] hover:border-b-[1px] pb-[2px] border-[#adff2f]">
        Movies
      </Link>
      <Link to={'/movies/most_pop_series'} className="mr-[12%] hover:border-b-[1px] pb-[2px] border-[#adff2f]">
        Series
      </Link>
    </div>
  );
}

export default Navbar;
