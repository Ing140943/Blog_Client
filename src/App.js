import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './style.scss'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
const basePath = process.env.REACT_APP_SERVICES_PATH

const router = createBrowserRouter([
  {
    path: basePath,
    element: <Layout />,
    children: [
      {
        path: basePath,
        element: <Home/>
      },
      {
        path: `${basePath}/post/:id`,
        element: <Single />
      },
      {
        path: `${basePath}/write`,
        element: <Write />
      }
    ]
  },
  {
    path: `${basePath}/Register`,
    element: <Register />,
  },
  {
    path: `${basePath}/Login`,
    element: <Login />,
  },
  
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
