import { useLoaderData } from 'react-router-dom';
import Input from '../components/Input';
import RecipeList from '../components/RecipeList';
import type { RecipeType } from '../types/recipeType';

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
        <div> No Recipes</div>
      )}
    </>
  );
};

export default Recipe;
