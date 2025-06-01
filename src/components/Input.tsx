import { Form } from 'react-router-dom';

const Input = () => {
  return (
    <Form
      role="search"
      method="get"
      action="/recipe"
      className="flex items-center justify-center gap-5 w-full px-4 mb-8"
    >
      <label htmlFor="search-recipe" className="sr-only">
        Search Recipe
      </label>
      <input
        type="text"
        id="search-recipe"
        name="q"
        className="font-inter text-lg border-2 p-4 rounded-2xl w-full my-8 md:w-3/5 lg:w-2/5 xl:w-1/5"
      />
      <button
        type="submit"
        aria-label="submit search"
        className="font-inter p-4 cursor-pointer bg-warm-yellow rounded-2xl font-bold uppercase border-2 ease-in border-graphite-gray shadow-sm shadow-deep-brown active:shadow-warm-gray active:shadow-md active:-translate-y-0.5"
      >
        Search
      </button>
    </Form>
  );
};

export default Input;
