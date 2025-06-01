import { useNavigate, useRouteError } from 'react-router-dom';
interface errorType {
  data: string;
  error: string;
  message: string;
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as errorType;

  return (
    <div className="">
      <img
        src="../../src/assets/cannot-find.png"
        alt="a surprised little man"
      />
      <h1>Oops!There's something wrong</h1>
      <p>{error.data || error.message}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
