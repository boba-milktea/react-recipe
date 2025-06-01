import { FaExclamation } from 'react-icons/fa';
import Input from './Input';
const jumpingVeggie = '../../src/assets/food.gif';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="py-4 text-sunset-orange text-shadow-md flex font-bold items-center uppercase text-3xl text-graphite-gray hover:rotate-y-30 duration-300 transition ease-in-out md:text-5xl">
        Buon Appetito
        <span className="block rotate-45">
          <FaExclamation />
        </span>
      </h1>
      <img
        className="my-4 w-11/12 md:w-1/3 lg:w-1/4"
        src={jumpingVeggie}
        alt="vegetables jumping up and down"
      />
      <Input />
    </div>
  );
};

export default Home;
