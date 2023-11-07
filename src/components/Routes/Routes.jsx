import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Roots from "../Layout/Roots";
import Error from "../pages/Error/Error";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import BidReq from "../pages/BidReq/BidReq";
import MyBids from "../pages/MyBids/MyBids";
import AddJobs from "../pages/AddJobs/AddJobs";

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
        path: "/bid_request",
        element: <BidReq></BidReq>
      },
      {
        path: "/my_bids",
        element: <MyBids></MyBids>
      },
      {
        path: "/add_jobs",
        element: <AddJobs></AddJobs>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ]
  },
]);

export default router;
