import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';
import InfoMovie from './InfoMovie/InfoMovie';
import Search from './Search/Search';
import images from '../../../assets/images';

function MovieItem({ data, displayButton = 'hidden' }) {
  return (
    <div className="flex min-h-[763px]">
      <div className="w-1/2 bg-black ">
        <Navbar />
        <InfoMovie data={data} displayButton={displayButton} />
      </div>

      <div className="w-1/2 relative">
        <div className="w-full h-full">
          <img
            className="absolute w-full h-full object-cover "
            src={data && data.primaryImage ? data.primaryImage.url : images.no_image}
            alt="Movie"
          />
        </div>

        {/* Search */}
        <Search />
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  data: PropTypes.object,
};
export default MovieItem;
