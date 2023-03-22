import Home from './pages/home/Home';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Page404 from './pages/NotFound/Page404';
import React, { useContext } from 'react'
import { productInputs, userInputs } from './formSource';
import './style/dark.scss'
import { DarkModeContext } from './context/darkModeContext';

const router = createBrowserRouter([
  {
    errorElement: <Page404 />,
    path: "/",
    element: <Home />,
    loader:
      () => {
        const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:kaushikshopadmin")).loggedUser).isAdmin;
        console.log(admin)
        if (!admin) {
          throw redirect("/login")
        }
        else {
          return false;
        }
      }
    ,

  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    loader:
      () => {
        const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:kaushikshopadmin")).loggedUser).isAdmin;
        console.log(admin)
        if (!admin) {
          throw redirect("/login")
        }
        else {
          return false;
        }
      }
    ,
    children: [
      {
        index: true,
        path: "",
        element: <List />
      },
      {
        path: ":userId",
        element: <Single />
      },
      {
        path: "new",
        element: <New inputs={userInputs} title="Add New User" />
      }
    ]
  },
  {
    path: "/products",
    loader:
      () => {
        const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:kaushikshopadmin")).loggedUser).isAdmin;
        console.log(admin)
        if (!admin) {
          throw redirect("/login")
        }
        else {
          return false;
        }
      }
    ,
    children: [
      {
        index: true,
        path: "",
        element: <List />
      },
      {
        path: ":productId",
        element: <Single />
      },
      {
        path: "new",
        element: <New inputs={productInputs} title="Add New Product" />
      }
    ]
  }
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
