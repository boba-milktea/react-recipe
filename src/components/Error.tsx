import { useNavigate, useRouteError } from 'react-router-dom';
interface errorType {
  data: string;
  error: string;
  message: string;
}
import cantFound from '../assets/cannot-find.png';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as errorType;

  return (
    <div className="flex flex-col gap-2 p-8 items-center">
      <img
        className="w-3/5 lg:w-2/5"
        src={cantFound}
        alt="a surprised little man"
      />
      <h1 className="font-bold mt-4 bg-warm-yellow p-2 rounded-2xl">
        Oops!There's something wrong
      </h1>
      <p>{error.data || error.message}</p>
      <button
        className="flex gap-2 items-center underline cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaRegArrowAltCircleLeft />
        Go Back
      </button>
    </div>
  );
};

export default Error;
