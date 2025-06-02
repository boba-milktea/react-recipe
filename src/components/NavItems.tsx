import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    label: 'Home',
    to: '/'
  },
  { label: 'Recipe', to: 'Recipe' },
  { label: 'MyRecipe', to: 'MyRecipe' }
];

const NavItems = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      {navLinks.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onClick}
          className="transition duration-300 ease-in-out text-deep-brown
          hover:text-amber-950 hover:-translate-y-1 hover:underline"
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};

export default NavItems;
