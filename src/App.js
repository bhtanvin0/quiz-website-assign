import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Home from './components/Home';
import Root from './components/Root';
import Statistics from './components/Statistics';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'home',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },

    ]
  },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
