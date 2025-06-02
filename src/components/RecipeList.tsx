import { Link } from 'react-router-dom';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { useRecipeContext } from '../hooks/useRecipeContext';
import type { RecipeType } from '../types/recipeType';

const RecipeList = ({ recipe }: { recipe: RecipeType }) => {
  const { likedRecipes, setLikedRecipes } = useRecipeContext();

  const hasLikedRecipes: boolean = likedRecipes.some(
    (likedRecipe) => likedRecipe.idMeal === recipe.idMeal
  );

  const updateLikedRecipes = () => {
    if (hasLikedRecipes) {
      setLikedRecipes(
        likedRecipes.filter(
          (likedRecipe) => likedRecipe.idMeal !== recipe.idMeal
        )
      );
    } else {
      setLikedRecipes([...likedRecipes, { ...recipe, isLiked: true }]);
    }
  };

  return (
    recipe && (
      <div className="p-8 bg-amber-200 rounded-2xl font-inter md:text-lg lg:text-2xl">
        <img
          className="rounded-xl mb-8 shadow-md shadow-deep-brown"
          src={recipe.strMealThumb}
          alt={`image of ${recipe.strMeal}`}
        />
        <p>
          <span className="font-bold">Name: </span>
          {recipe.strMeal}
        </p>
        <p>
          <span className="font-bold">Category: </span>
          {recipe?.strCategory}
        </p>
        <div className="flex items-center justify-between">
          <Link
            className="block mt-4 underline transition duration-300 ease-in-out hover:translate-y-0.5 "
            to={`/recipe/${recipe.idMeal}`}
          >
            Go Check Recipe
          </Link>
          <div
            onClick={() => {
              updateLikedRecipes();
            }}
          >
            {!hasLikedRecipes ? (
              <FcLikePlaceholder className="cursor-pointer hover:rotate-30 size-[2em]" />
            ) : (
              <FcLike className="cursor-pointer size-[2em]" />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default RecipeList;
