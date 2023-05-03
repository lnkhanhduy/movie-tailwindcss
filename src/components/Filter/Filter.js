function Filter({ children, onClick, classFilter }) {
  return (
    <button className={`filter false ${classFilter}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Filter;
