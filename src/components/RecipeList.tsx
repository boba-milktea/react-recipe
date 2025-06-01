import { Link } from 'react-router-dom';
import type { RecipeType } from '../types/recipeType';

const RecipeList = ({ recipe }: { recipe: RecipeType }) => {
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
        <Link
          className="block mt-4 underline transition duration-300 ease-in-out hover:translate-y-0.5 "
          to={`/recipe/${recipe.idMeal}`}
        >
          Go Check Recipe
        </Link>
      </div>
    )
  );
};

export default RecipeList;
