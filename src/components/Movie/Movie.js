import Carousel from '../Carousel/Carousel';
import MovieItem from './MovieItem/MovieItem';
import { SwiperSlide } from 'swiper/react';

function Movies({ dataMovies }) {
  return (
    <Carousel
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {console.log(dataMovies)}
    </Carousel>
  );
}

export default Movies;
