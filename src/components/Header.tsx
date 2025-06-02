import { MdOutlineDinnerDining } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-32 p-4 text-center  md:p-8 xl:p-16">
      <div className="flex items-center gap-2">
        <MdOutlineDinnerDining
          size="4em"
          className="fill-sunset-orange xl:size-[5em]"
        />
        <p className="flex font-shrikhand font-bold uppercase text-lg text-graphite-gray md:text-2xl lg:text-2xl xl:text-3xl">
          Buon Appetito!
        </p>
      </div>
      <nav className="flex font-bold font-inter text-md gap-2 md:gap-4 lg:gap-4 xl:gap-8 md:text-lg lg:text-xl xl:text-2xl">
        <NavLink
          to="/"
          className="transition duration-300 ease-in-out text-deep-brown hover:text-amber-950 hover:-translate-y-1 hover:underline"
        >
          Home
        </NavLink>
        <NavLink
          to="Recipe"
          className="transition duration-300 ease-in-out text-deep-brown hover:text-amber-950 hover:-translate-y-1 hover:underline"
        >
          Recipe
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
