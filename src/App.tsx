import {
  RouterProvider,
  createBrowserRouter as Router
} from 'react-router-dom';
//components
import Layout from './components/Layout';
import Error from './components/Error';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
//pages
import Recipe from './pages/Recipe';
import MyRecipe from './pages/MyRecipe';
//loaders
import { recipesLoader } from './loaders/recipesLoader';
import { recipeLoader } from './loaders/recipeLoader';
//providers
import RecipeProvider from './providers/RecipeProvider';

const router = Router([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/recipe',
        element: <Recipe />,
        errorElement: <Error />,
        loader: recipesLoader
      },
      {
        path: '/recipe/:recipeId',
        element: <RecipeDetail />,
        errorElement: <Error />,
        loader: recipeLoader
      },
      {
        path: '/myrecipe',
        element: <MyRecipe />,
        errorElement: <Error />,
        loader: recipesLoader
      }
    ]
  }
]);

function App() {
  return (
    <RecipeProvider>
      <RouterProvider router={router} />
    </RecipeProvider>
  );
}

export default App;
