import { useLoaderData } from 'react-router-dom';
import Input from '../components/Input';
import RecipeList from '../components/RecipeList';
import type { RecipeType } from '../types/recipeType';
import noRecipe from '../assets/no-recipe.png';

const Recipe = () => {
  const recipes = useLoaderData();

  return (
    <>
      <Input />
      {recipes && recipes.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {recipes.map((recipe: RecipeType) => (
            <RecipeList key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Recipe;
