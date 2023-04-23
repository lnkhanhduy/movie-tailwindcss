function Filter({ children }) {
  return (
    <button className="transition transform ease-in delay-[.2s] hover:scale-[1.1] m-[0.1vw] px-[0.8vh] py-[0.6vh] rounded-[10%] text-[14px] bg-[#acff2f7a]">
      {children}
    </button>
  );
}

export default Filter;
