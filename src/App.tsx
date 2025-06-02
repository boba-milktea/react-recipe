import Recipe from './pages/Recipe';
import Error from './components/Error';
import {
  RouterProvider,
  createBrowserRouter as Router
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import { recipesLoader } from './loaders/recipesLoader';
import RecipeDetail from './components/RecipeDetail';
import { recipeLoader } from './loaders/recipeLoader';

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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
