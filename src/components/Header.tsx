import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Input from './Input';
import NavItems from './NavItems';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between h-26 p-4 text-center relative md:p-8 xl:p-16">
      <Link to="/" className="flex items-center gap-2">
        <img className="w-[5em] md:w-[5em]" src={logo} alt="a fork logo" />
      </Link>

      <Input />

      <nav className="hidden md:flex font-bold font-inter text-md gap-2 md:gap-4 xl:gap-8 md:text-xl xl:text-2xl">
        <NavItems />
      </nav>

      <RxHamburgerMenu
        className="md:hidden size-[3em] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        role="botton"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="md:hidden w-full h-[15em] bg-warm-yellow absolute top-26 z-10">
          <nav className="flex flex-col items-end font-bold font-inter uppercase text-lg gap-8 p-8">
            <NavItems onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
