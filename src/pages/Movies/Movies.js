import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Filter from '../../components/Filter/Filter';
import Navbar from '../../components/Movies/MovieItem/Navbar/Navbar';
import Search from '../../components/Movies/MovieItem/Search/Search';
import MovieCardItem from '../../components/MovieCards/MovieCardItem/MovieCardItem';
import { BaseAPI } from '../../services/BaseAPI';

function Movies() {
  const [genres, setGenres] = useState([]);
  const [dataMovies, setDataMovies] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [ref, inView] = useInView({});
  const [filterGenre, setFilterGenre] = useState('');
  const [filterYear, setFilterYear] = useState('');

  let labelPage = '';

  const listMovies = window.location.pathname.split('/')[2];
  const searchMovies = window.location.pathname.split('/')[3];

  if (listMovies === 'most_pop_movies') {
    labelPage = 'Most Popular Movies';
  } else if (listMovies === 'top_boxoffice_200') {
    labelPage = 'Top Box Office';
  } else if (listMovies === 'top_rated_250') {
    labelPage = 'Top Rated Movies';
  } else if (listMovies === 'top_rated_lowest_100') {
    labelPage = 'Top Lowest Rated Movies';
  } else if (listMovies === 'top_rated_series_250') {
    labelPage = 'Top Rated Series';
  }

  const handleClick = (e) => {
    if (e.target.parentElement.classList.contains('filter-genres')) {
      let genre = '';
      if (e.target.classList.contains('false')) {
        document.querySelector('.filter-genres .true')?.classList.replace('true', 'false');
        e.target.classList.replace('false', 'true');
        genre = e.target.textContent;
      } else {
        e.target.classList.replace('true', 'false');
      }
      setFilterGenre(genre);
    } else if (e.target.parentElement.classList.contains('filter-years')) {
      let year = '';
      if (e.target.classList.contains('false')) {
        document.querySelector('.filter-years .true')?.classList.replace('true', 'false');
        e.target.classList.replace('false', 'true');
        year = e.target.textContent;
      } else {
        e.target.classList.replace('true', 'false');
      }
      setFilterYear(year);
    }
  };

  let arrayYears = [];

  for (let i = 2023; i >= 2011; i--) {
    arrayYears.push(
      <Filter onClick={handleClick} classFilter={`${i}-filter`} key={i}>
        {i}
      </Filter>
    );
  }

  useEffect(() => {
    if (!searchMovies) {
      if (filterGenre || filterYear) {
        const genre = filterGenre ? `&genre=${filterGenre}` : '';
        const year = filterYear ? `&year=${filterYear}` : '';

        axios
          .request(BaseAPI(`/titles/?info=mini_info&list=${listMovies}&sort=pos.incr${genre}${year}&limit=21`))
          .then(function (response) {
            setNextPage(response.data.next);
            setDataMovies(response.data.results);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    } else {
      if (filterGenre || filterYear) {
        const genre = filterGenre ? `&genre=${filterGenre}` : '';
        const year = filterYear ? `&year=${filterYear}` : '';

        axios
          .request(BaseAPI(`/titles/search/title/${searchMovies}?info=mini_info${genre}${year}&limit=21`))
          .then(function (response) {
            setNextPage(response.data.next);
            setDataMovies(response.data.results);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterGenre, filterYear]);

  useEffect(() => {
    axios
      .request(BaseAPI('/titles/utils/genres'))
      .then(function (response) {
        setGenres(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    if (!searchMovies) {
      axios
        .request(BaseAPI(`/titles?info=mini_info&sort=pos.incr&list=${listMovies}&limit=15`))
        .then(function (response) {
          setNextPage(response.data.next);
          setDataMovies(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      axios
        .request(BaseAPI(`/titles/search/title/${searchMovies}?info=mini_info&limit=15`))
        .then(function (response) {
          setNextPage(response.data.next);
          setDataMovies(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView && nextPage) {
      axios
        .request(BaseAPI(nextPage))
        .then(function (response) {
          setDataMovies([...dataMovies, ...response.data.results]);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="bg-black text-white min-h-[760px]">
      <div>
        <div className="w-[50%]">
          <Navbar />
        </div>
        <Search />
      </div>
      <div className="px-4">
        <div className="w-[70%] flex flex-wrap filter-genres">
          {genres &&
            genres.results &&
            genres.results.map((genre) => {
              if (genre) {
                return (
                  <Filter onClick={handleClick} classFilter={`${genre}-filter`} key={genre}>
                    {genre}
                  </Filter>
                );
              }
              return null;
            })}
        </div>
        <div className="filter-years">{arrayYears}</div>
        <div>
          <div className="ml-[2.5vw] text-[18px] font-[600] py-5">{labelPage}</div>
          <div className="flex flex-wrap px-12">
            {dataMovies &&
              dataMovies.map((movie, index) => {
                return (
                  <div className="w-[20%] mb-4" key={index} ref={ref}>
                    <MovieCardItem width={'80%'} data={movie} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
