function Rating() {
  return (
    <div className="flex px-5 justify-between items-center w-[80%]">
      <p>2h - 49 min</p>
      <span>|</span>
      <p>2023</p>
      <span>|</span>
      <div className="overflow-hidden">
        <p className="text-[#ffd700] text-[24px]">★★★★★</p>
      </div>
    </div>
  );
}

export default Rating;
