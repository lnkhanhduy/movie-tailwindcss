import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem/CategoryItem';

function Categories({ data }) {
  return (
    <div className="flex flex-wrap">
      {data &&
        data.genres.map((genre) => {
          return <CategoryItem key={genre.id}>{genre.text}</CategoryItem>;
        })}
    </div>
  );
}

Categories.propTypes = {
  data: PropTypes.object,
};

export default Categories;
