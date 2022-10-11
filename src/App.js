import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home></Home>
  },
])

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
