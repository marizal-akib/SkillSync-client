import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Roots from "../Layout/Roots";
import Error from "../pages/Error/Error";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ]
  },
]);

export default router;
