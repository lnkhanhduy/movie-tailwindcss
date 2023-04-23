import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import MovieCardItem from './MovieCardItem/MovieCardItem';
import { SwiperSlide } from 'swiper/react';

function MovieCards({ label }) {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between py-5 items-center pl-[55px] pr-7">
        <p className="text-[20px] ">{label}</p>
        <Link className="font-[600] text-[rgba(148,233,21,.842);] text-[14px] p-3">view all &gt;</Link>
      </div>
      <div className=" flex justify-between px-5 ">
        <Carousel
          navigation
          slidesPerView={4}
          pagination={{
            type: 'progressbar',
          }}
        >
          <SwiperSlide>
            <MovieCardItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardItem />
          </SwiperSlide>
        </Carousel>
      </div>
    </div>
  );
}

export default MovieCards;
