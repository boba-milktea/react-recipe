import noRecipe from '../assets/no-recipe.png';

const NoRecipe = () => {
  return (
    <div className="mx-auto p-4 flex flex-col items-center">
      <p className="font-inter text-xl font-bold text-deep-brown p-4 lg:text-2xl ">
        Aye! No Recipes
      </p>
      <img
        className="w-2/5 lg:w-1/5"
        src={noRecipe}
        alt="a little guy drinking"
      />
    </div>
  );
};

export default NoRecipe;
