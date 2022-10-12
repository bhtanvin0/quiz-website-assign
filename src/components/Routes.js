import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Prectice from "./Prectice";
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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: 'home',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>,
        },
        {
            path: '/quiz/:courseId',
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`),
            element: <Prectice></Prectice>
          }

  
      ]
    },
  
  ])

  export default router