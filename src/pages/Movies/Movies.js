import Filter from '../../components/Filter/Filter';
import Navbar from '../../components/Movie/MovieItem/Navbar/Navbar';
import Search from '../../components/Movie/MovieItem/Search/Search';
import MovieCardItem from '../../components/MovieCards/MovieCardItem/MovieCardItem';

function Movies() {
  return (
    <div className="bg-black text-white">
      <div>
        <div className="w-[50%]">
          <Navbar />
        </div>
        <Search />
      </div>
      <div className="px-4">
        <div>
          <Filter>Action</Filter>
          <Filter>Action</Filter>
          <Filter>Action</Filter>
          <Filter>Action</Filter>
          <Filter>Action</Filter>
        </div>
        <div>
          <Filter>2023</Filter>
          <Filter>2023</Filter>
          <Filter>2023</Filter>
          <Filter>2023</Filter>
          <Filter>2023</Filter>
        </div>
        <div>
          <div className="ml-[2.5vw] text-[18px] font-[600] py-5">Most Popular Movie</div>
          <div className="flex flex-wrap px-12">
            <div className="w-[20%] mb-4">
              <MovieCardItem width={'80%'} />
            </div>
            <div className="w-[20%] mb-4">
              <MovieCardItem width={'80%'} />
            </div>
            <div className="w-[20%] mb-4">
              <MovieCardItem width={'80%'} />
            </div>
            <div className="w-[20%] mb-4">
              <MovieCardItem width={'80%'} />
            </div>
            <div className="w-[20%] mb-4">
              <MovieCardItem width={'80%'} />
            </div>
            <div className="w-[20%] mb-4">
              <MovieCardItem width={'80%'} />
            </div>
            <div className="w-[20%] mb-4">
              <MovieCardItem width={'80%'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
