import MovieCards from '../../components/MovieCards/MovieCards';
import Movie from '../../components/Movie/Movie';
import axios from 'axios';
import { useState } from 'react';

function Home() {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    headers: {
      'X-RapidAPI-Key': '41dd089a2dmsh99003c1ff558bd6p16ee13jsn2c347790813c',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  };

  const [moviesData, setMoviesData] = useState(() => {
    axios
      .request(options)
      .then(function (response) {
        setMoviesData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div>
      <Movie dataMovies={moviesData ? moviesData.results : ''} />
      <MovieCards label={'Most Popular Movies'} />
      <MovieCards label={'Top Box Office'} />
      <MovieCards label={'Top Rated Movies'} />
      <MovieCards label={'Top Lowest Rated Movies'} />
      <MovieCards label={'Top Rated Series'} />
    </div>
  );
}

export default Home;
