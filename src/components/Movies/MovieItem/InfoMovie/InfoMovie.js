import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import Rating from './Rating/Rating';
import Categories from './Categories/Categories';
import Cast from './Cast/Cast';

function InfoMovie({ data, displayButton = 'hidden' }) {
  return (
    <div className="pl-10 text-white ">
      <Link to={data ? `/movie/${data.id}` : ''} className=" flex items-center py-4">
        <img src={images.logo} alt="logo" className="w-7 h-7 " />
        <p className="ml-1 font-[700] text-[24px]">{data && data.titleText ? data.titleText.text : ''}</p>
      </Link>
      <div className="pb-2">
        <Rating />
      </div>
      <div className="pb-2 w-[85%]">
        <Categories data={data ? data.genres : []} />
      </div>
      <div className="flex w-[70%] max-h-[100px]  ">
        {data && data.plot && data.plot.plotText.plainText && (
          <>
            <img src={images.logo_movie} alt="logo film" className="w-7 h-7" />
            <p className="ml-1 pb-1 overflow-y-auto">{data.plot.plotText.plainText}</p>
          </>
        )}
      </div>

      <div className="py-2 h-[45px] overflow-auto">
        {data &&
          data.keywords &&
          data.keywords.edges &&
          data.keywords.edges.map((keyword, index) => {
            return (
              <span className="p-[1%] bg-[#131212] text-[15px] m-[0.5%] rounded-[5%] font-[500]" key={index}>
                {keyword.node.text}
              </span>
            );
          })}
      </div>

      <div className="flex flex-wrap">
        {data &&
          data.principalCast &&
          data.principalCast[0] &&
          data.principalCast[0].credits.map((info, index) => {
            return <Cast key={index} data={info} />;
          })}
      </div>

      <div className={displayButton}>
        <div className="ml-56 absolute bottom-1 ">
          <button className="watch-btn-v">Watch V1</button>
          <button className="watch-btn-v">Watch V2</button>
          <button className="watch-btn-trailer">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
}
InfoMovie.propTypes = {
  data: PropTypes.object,
};
export default InfoMovie;
