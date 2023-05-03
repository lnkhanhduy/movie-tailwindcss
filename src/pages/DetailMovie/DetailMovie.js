import MovieItem from '../../components/Movies/MovieItem/MovieItem';
import axios from 'axios';
import { BaseAPI } from '../../services/BaseAPI';
import { useEffect, useState } from 'react';

function DetailMovie() {
  const idMovie = window.location.pathname.split('/')[2];
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .request(BaseAPI(`/titles/${idMovie}?info=custom_info`))
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MovieItem data={data ? data.results : []} displayButton="" />
    </div>
  );
}

export default DetailMovie;
