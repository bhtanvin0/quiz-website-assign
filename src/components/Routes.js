import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";
import Statistics from "./Statistics";

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

  export default router