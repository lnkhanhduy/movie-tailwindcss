import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import Rate from './Rating/Rating';
import Categories from './Categories/Categories';
import Cast from './Cast/Cast';

function InfoMovie() {
  return (
    <div className="pl-10 text-white">
      <Link className=" flex items-center py-4">
        <img src={images.logo} alt="logo" className="w-7 h-7 " />
        <p className="ml-1 font-[700] text-[24px]">hihi</p>
      </Link>
      <Rate />
      <div className="py-5 w-[85%]">
        <Categories />
      </div>
      <div className="flex w-[70%]">
        <img src={images.logo_movie} alt="logo film" className="w-7 h-7" />
        <p className="ml-1">
          It is based on audacious and free-spirited Ines, who convinced the necessary crime on the path to redemption
          and kidnaps six-year-old Terry from the foster care system.
        </p>
      </div>
      <div className="py-5">
        <span className="p-[1%] bg-[#131212] text-[15px] m-[0.5%] rounded-[5%] font-[500]">based on video game</span>
        <span className="p-[1%] bg-[#131212] text-[15px] m-[0.5%] rounded-[5%] font-[500]">based on video game</span>
        <span className="p-[1%] bg-[#131212] text-[15px] m-[0.5%] rounded-[5%] font-[500]">based on video game</span>
      </div>
      <div className="flex flex-wrap">
        <Cast />
        <Cast />
        <Cast />
        <Cast />
      </div>
    </div>
  );
}

export default InfoMovie;
