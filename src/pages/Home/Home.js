import MovieCards from '../../components/MovieCards/MovieCards';
import Movie from '../../components/Movies/Movies';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as getServices from '../../services/BaseAPI';

function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const [mostPopMovies, setMostPopMovies] = useState([]);
  const [topBoxOffice, setTopBoxOffice] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [topLowestRated, setTopLowestRated] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  useEffect(() => {
    //get movie carousel
    axios
      .request(getServices.BaseAPI('/titles?info=custom_info'))
      .then(function (response) {
        setMoviesData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    //get popular movie
    axios
      .request(getServices.BaseAPI('/titles?info=mini_info&sort=pos.incr&list=most_pop_movies&limit=15'))
      .then(function (response) {
        setMostPopMovies(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    //get top box office
    axios
      .request(getServices.BaseAPI('/titles?info=mini_info&sort=pos.incr&list=top_boxoffice_200&limit=15'))
      .then(function (response) {
        setTopBoxOffice(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    //get top rated
    axios
      .request(getServices.BaseAPI('/titles?info=mini_info&sort=pos.incr&list=top_rated_250&limit=15'))
      .then(function (response) {
        setTopRated(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    //get top lowest rated
    axios
      .request(getServices.BaseAPI('/titles?info=mini_info&sort=pos.incr&list=top_rated_lowest_100&limit=15'))
      .then(function (response) {
        setTopLowestRated(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    //get top rated series
    axios
      .request(getServices.BaseAPI('/titles?info=mini_info&sort=pos.incr&list=top_rated_series_250&limit=15'))
      .then(function (response) {
        setTopRatedSeries(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Movie dataMovies={moviesData ? moviesData.results : []} />
      <MovieCards label={'Most Popular Movies'} data={mostPopMovies} linkPage={'/movies/most_pop_movies'} />
      <MovieCards label={'Top Box Office'} data={topBoxOffice} linkPage={'/movies/top_boxoffice_200'} />
      <MovieCards label={'Top Rated Movies'} data={topRated} linkPage={'/movies/top_rated_250'} />
      <MovieCards label={'Top Lowest Rated Movies'} data={topLowestRated} linkPage={'/movies/top_rated_lowest_100'} />
      <MovieCards label={'Top Rated Series'} data={topRatedSeries} linkPage={'/movies/top_rated_series_250'} />
    </div>
  );
}

export default Home;
