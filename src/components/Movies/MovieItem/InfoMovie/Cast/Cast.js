import PropTypes from 'prop-types';
import images from '../../../../../assets/images';

function Cast({ data }) {
  return (
    <div className="flex bg-[#090909] rounded-[3%] m-[2%] p-[2%]">
      <div className="w-[100px] h-[100px] ">
        <img
          src={data.name.primaryImage ? data.name.primaryImage.url : images.no_image}
          alt="Cast"
          className="rounded-[50%] object-cover w-full h-full "
        />
      </div>
      <div className="flex flex-col w-[100px] h-[100px] text-center text-[11px] justify-center ml-1 overflow-auto">
        <b>{data.name.nameText ? data.name.nameText.text : ''}</b>
        {data.characters && data.characters[0].name && (
          <>
            as
            <span>{data.characters[0].name}</span>
          </>
        )}
      </div>
    </div>
  );
}

Cast.propTypes = {
  data: PropTypes.object,
};

export default Cast;
