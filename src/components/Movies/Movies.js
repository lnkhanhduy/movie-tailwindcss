import PropTypes from 'prop-types';
import Carousel from '../Carousel/Carousel';
import MovieItem from './MovieItem/MovieItem';
import { SwiperSlide } from 'swiper/react';
import Navbar from './MovieItem/Navbar/Navbar';

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
      {dataMovies?.map((movie) => {
        return (
          <SwiperSlide key={movie.id}>
            <MovieItem data={movie} />
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
}
Movies.propTypes = { dataMovies: PropTypes.array };

export default Movies;
