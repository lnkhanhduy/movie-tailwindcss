function Cast() {
  return (
    <div className="flex bg-[#090909] rounded-[3%] m-[2%] p-[2%]">
      <div className="w-[100px] h-[100px] ">
        <img
          src="https://images.unsplash.com/photo-1681299561277-ad07c08d6be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="Cast"
          className="rounded-[50%] object-cover w-full h-full "
        />
      </div>
      <div className="flex flex-col w-[100px] h-[100px] text-center text-[11px] justify-center ml-1">
        <b>duy</b>
        as
        <span>khanh </span>
      </div>
    </div>
  );
}

export default Cast;
