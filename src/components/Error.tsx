import { useNavigate, useRouteError } from 'react-router-dom';
import cantFound from '../assets/cannot-find.png';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

interface errorType {
  data: string;
  error: string;
  message: string;
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as errorType;

  return (
    <div className="flex flex-col gap-8 p-8 items-center">
      <h1 className="text-3xl mt-4 bg-warm-yellow p-2 border-4 border-black rounded-2xl">
        Oops!There's something wrong
      </h1>
      <p className="font-inter font-bold text-xl lg:text-2xl">
        {error.data || error.message}
      </p>
      <button
        className="font-inter font-bold text-xl lg:text-2xl flex gap-2 items-center underline cursor-pointer transition duration-300  hover:-translate-y-1"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaRegArrowAltCircleLeft />
        Go Back
      </button>
      <img
        className="w-[15em] lg:w-[20em] mt-4"
        src={cantFound}
        alt="a surprised little man"
      />
    </div>
  );
};

export default Error;
