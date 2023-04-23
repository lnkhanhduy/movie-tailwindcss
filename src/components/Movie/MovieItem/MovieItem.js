import Navbar from './Navbar/Navbar';
import InfoMovie from './InfoMovie/InfoMovie';
import Search from './Search/Search';

function MovieItem({ movie }) {
  return (
    <div className="flex min-h-[760px]">
      <div className="w-1/2 bg-black">
        <Navbar />
        <InfoMovie />
      </div>

      <div className="w-1/2 relative ">
        <div className="w-full h-full">
          <img className="absolute w-full h-full object-cover " src="" alt="Movie" />
        </div>

        {/* Search */}
        <Search />
      </div>
    </div>
  );
}

export default MovieItem;
