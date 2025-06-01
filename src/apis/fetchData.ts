import axios from 'axios';
import type { AxiosResponse } from 'axios';

export const fetchRecipes = async <T>(
  query: string = ''
): Promise<T | undefined> => {
  try {
    const res: AxiosResponse<T> = await axios.get<T>(
      query
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
        : 'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    if (res.status !== 200) {
      throw new Error(`Oops! There's a problem, status: ${res.status}`);
    } else {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export const fetchRecipe = async <T>(
  query: string = ''
): Promise<T | undefined> => {
  try {
    const res: AxiosResponse<T> = await axios.get<T>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`
    );
    if (res.status !== 200) {
      throw new Error(`Oops! There's a problem, status: ${res.status}`);
    } else {
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};
