import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';

function MovieCardItem({ width = '60%', data }) {
  return (
    <div className={`w-[${width}] m-auto`}>
      <Link to={data ? `/movie/${data.id}` : ''}>
        <img
          src={data && data.primaryImage ? data.primaryImage.url : images.no_image}
          alt="Movie"
          className="w-full h-[323px] object-cover"
        />
        <div className="text-[#f5f5f5] text-[15px] font-[600] shadow-[0_0_15px_#000] text-center pt-2">
          {data && data.titleText ? data.titleText.text : ''}
          <br />
          {data && data.releaseDate ? data.releaseDate.year : ''}
        </div>
      </Link>
    </div>
  );
}
MovieCardItem.propTypes = {
  width: PropTypes.string,
  data: PropTypes.object,
};

export default MovieCardItem;
