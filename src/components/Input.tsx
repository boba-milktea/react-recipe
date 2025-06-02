import { Form, useLocation } from 'react-router-dom';

const Input = () => {
  const location = useLocation();

  return (
    <Form
      // the form won't reset because it's in the header (always mounted)
      // using the unique key to force the re-render 
      key={location.key}
      role="search"
      method="get"
      action="/recipe"
      className="flex items-center justify-center gap-2 px-4"
    >
      <label htmlFor="search-recipe" className="sr-only">
        Search Recipe
      </label>
      <input
        type="text"
        id="search-recipe"
        name="q"
        className="font-inter text-lg border-2 p-2 rounded-2xl w-full lg:w-[32em]"
      />
      <button
        type="submit"
        aria-label="submit search"
        className="font-inter text-md p-2 cursor-pointer md:p-2 bg-warm-yellow rounded-2xl font-bold uppercase border-2 ease-in border-black shadow-sm shadow-deep-brown active:shadow-warm-gray active:shadow-md active:-translate-y-0.5"
      >
        Search
      </button>
    </Form>
  );
};

export default Input;
