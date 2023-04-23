import PropTypes from 'prop-types';

function CategoryItem({ children }) {
  return <span className="bg-[rgba(172,255,47,.479)] rounded-[4px] m-[0.5%] p-[0.5%]">{children}</span>;
}

CategoryItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryItem;
