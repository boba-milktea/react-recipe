import { FaExclamation } from 'react-icons/fa';
import jumpingVeggie from '../assets/food.gif';

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
      <p className="font-inter text-lg/8 text-center md:w-4/5 md:text-xl/8 xl:w-3/5 xl:text-2xl/12">
        Not sure what to cook tonight or looking for party dish ideas? <br />
        Just enter a keyword to explore a wide variety of recipes. <br />
        <span className="bg-amber-200 p-2 mx-2 rounded-2xl ">
          Want to be surprised?
        </span>
        Click "Search" without typing anything to get a random recipe!
      </p>
      {/* <Input /> */}
    </div>
  );
};

export default Home;
