import { useLoaderData } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import NoRecipe from '../components/NoRecipe';
import type { RecipeType } from '../types/recipeType';

const Recipe = () => {
  const recipes = useLoaderData();

  return (
    <>
      {recipes && recipes.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {recipes.map((recipe: RecipeType) => (
            <RecipeList key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
        <NoRecipe />
      )}
    </>
  );
};

export default Recipe;
