import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { FcNoVideo } from 'react-icons/fc';
import { getEmbedUrl } from '../utils/getEmbedUrl';
import { pairUpIngredientMeasure } from '../utils/pairUpIngredientMeasure';

const RecipeDetail = () => {
  const recipe = useLoaderData();
  const navigate = useNavigate();

  const ingredients = pairUpIngredientMeasure(recipe);

  return (
    <>
      <button
        className="flex items-center gap-2 cursor-pointer font-inter font-bold text-xl underline py-4 hover:text-sunset-orange"
        onClick={() => navigate(-1)}
      >
        <FaRegArrowAltCircleLeft />
        To previous page
      </button>
      {recipe && (
        <div className="flex flex-col rounded-2xl bg-amber-200 p-8 xl:flex-row md:gap-4 xl:gap-8">
          <img
            className="rounded-xl mb-8 w-100 xl:w-md mx-auto "
            src={recipe.strMealThumb}
            alt={`image for ${recipe.strMeal}`}
          />
          <div className="font-inter text-lg flex flex-col gap-2 xl:w-1/2 xl:gap-4">
            <p>
              <span className="font-bold">Name: </span>
              {recipe.strMeal}
            </p>
            <p>
              <span className="font-bold">Category: </span>
              {recipe.strCategory}
            </p>

            <p className="font-bold">Ingredients: </p>
            <ul className="flex flex-wrap">
              {ingredients.map((ingre, i) => (
                <li key={i}>
                  {ingre.ingredient} | {ingre.measure}
                </li>
              ))}
            </ul>
            <p className="leading-8">
              <span className="font-bold">Instructions: </span>
              {recipe?.strInstructions}
            </p>
          </div>
          {recipe.strYoutube ? (
            <iframe
              className="mt-4 flex-grow h-100"
              allowFullScreen
              title="YouTube video"
              src={getEmbedUrl(recipe.strYoutube) ?? ''}
            ></iframe>
          ) : (
            <div className="flex flex-grow flex-col items-center text-center my-auto font-bold text-3xl text-sunset-orange">
              <FcNoVideo className="text-3xl" />
              No Video Available
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
