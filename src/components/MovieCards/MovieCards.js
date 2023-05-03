import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import MovieCardItem from './MovieCardItem/MovieCardItem';
import { SwiperSlide } from 'swiper/react';

function MovieCards({ label, data, linkPage }) {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between py-5 items-center pl-[55px] pr-7">
        <p className="text-[20px] ">{label}</p>
        <Link to={linkPage} className="font-[600] text-[rgba(148,233,21,.842);] text-[14px] p-3">
          view all &gt;
        </Link>
      </div>
      <div className=" flex justify-between px-10  ">
        <Carousel
          navigation
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            type: 'progressbar',
          }}
        >
          {data &&
            data.results &&
            data.results.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <MovieCardItem width={'60%'} data={movie} />
                </SwiperSlide>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}

export default MovieCards;
