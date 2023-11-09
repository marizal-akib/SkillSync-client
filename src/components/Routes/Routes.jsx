import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Roots from "../Layout/Roots";
import Error from "../pages/Error/Error";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import MyBids from "../pages/MyBids/BidRow/MyBids";
import AddJobs from "../pages/AddJobs/AddJobs";
import PostedJobs from "../pages/PostedJobs/PostedJobs";
import BidPage from "../pages/BidPage/BidPage";
import PrivateRout from "./PrivateRoutes";
import Update from "../pages/PostedJobs/Update/Update";
import Request from "../pages/Request/Request";

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
        element: <Login></Login>,
      },
      {
        path: "/bid_request",
        element: <Request></Request>,
      },
      {
        path: "/my_bids",
        element: (
          <PrivateRout>
            <MyBids></MyBids>
          </PrivateRout>
        ),
      },
      {
        path: "/add_jobs",
        element: (
          <PrivateRout>
            <AddJobs></AddJobs>
          </PrivateRout>
        ),
      },
      {
        path: "/posted_jobs",
        element: (
          <PrivateRout>
            <PostedJobs></PostedJobs>
          </PrivateRout>
        ),
      },
      {
        path: "/update_job/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job_bid?id=${params.id}`),
        element: (
          <PrivateRout>
            <Update></Update>
          </PrivateRout>
        ),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/job/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job_bid?id=${params.id}`),
        element: (
          <PrivateRout>
            <BidPage></BidPage>,
          </PrivateRout>
        ),
      },
    ],
  },
]);

export default router;
