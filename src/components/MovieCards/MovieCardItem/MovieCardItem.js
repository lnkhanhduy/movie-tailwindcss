import { Link } from 'react-router-dom';

function MovieCardItem({ width = '60%' }) {
  return (
    <div className={`w-[${width}] m-auto`}>
      <Link>
        <img
          src="https://images.unsplash.com/photo-1681491312804-f1725fd2da0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="Movie"
          className="w-full h-[323px] object-cover"
        />
        <div className="text-[#f5f5f5] text-[15px] font-[600] shadow-[0_0_15px_#000] text-center">
          Scream 4
          <br />
          2011
        </div>
      </Link>
    </div>
  );
}

export default MovieCardItem;
