import RecipeList from '../components/RecipeList';
import NoRecipe from '../components/NoRecipe';
import { useRecipeContext } from '../hooks/useRecipeContext';
import type { RecipeType } from '../types/recipeType';

const MyRecipe = () => {
  const { likedRecipes: recipes } = useRecipeContext();

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

export default MyRecipe;
