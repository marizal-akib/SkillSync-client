import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const navLink = (
    <>
      {user && (
        <li className="lg:hidden">
          <div className="flex flex-col-reverse text-center items-center ">
            {user.displayName ? (
              <h2 className="text-[#ff908b] w-full  font-semibold">
                {user.displayName}
              </h2>
            ) : (
              <h2 className="text-[#ff908b]  font-semibold">{user.email}</h2>
            )}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-30 rounded-full ">
                {user.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src="https://i.ibb.co/XXJqk0N/user.png" alt="" />
                )}
              </div>
            </label>
          </div>
          <div className="divider"></div>
        </li>
      )}

      {user ? (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="lg:hidden">
            <Link to='/add_jobs'>Add job</Link>
          </li>
          <li>
            <Link to="/bid_request">Bid Requests</Link>
          </li>
          <li className="lg:hidden">
            <Link>My posted jobs</Link>
          </li>
          <li>
            <Link to='/my_bids'>My Bids</Link>
          </li>
          <li className="lg:hidden">
            <button onClick={logOut}>Logout</button>
          </li>
        </>
      ) : (
        <li className="lg:hidden">
          <Link to="/login">Register/login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 text-[#918a8a] bg-[#003366]">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost h-fit normal-case text-xl">
          <img
            className="h-10 md:h-12"
            src="https://i.ibb.co/ZXq6gBx/Screenshot-2023-11-05-201937-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
        {user && (
          <>
            <div className="divider divider-horizontal "></div>
            <Link to='/add_jobs' className="btn btn-sm bg-[#918a8a] text-blue-950 border-none  text-xs md:btn-md md:text-sm">
              Add job
            </Link>
            <Link className="btn btn-sm bg-blue-800 text-[#bcb4b4] ml-2 border-none text-xs md:btn-md md:text-sm">
              My posted jobs
            </Link>
          </>
        )}
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          {user ? (
            <>
              <div className="flex flex-col-reverse  items-center md:flex-row-reverse">
                {user.displayName ? (
                  <h2 className="text-[#ff908b] w-full md:text-base text-xs font-semibold">
                    {user.displayName}
                  </h2>
                ) : (
                  <h2 className="text-[#ff908b]  md:text-sm text-xs font-semibold">
                    {user.email}
                  </h2>
                )}
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    {user.photoURL ? (
                      <img src={user.photoURL} />
                    ) : (
                      <img src="https://i.ibb.co/XXJqk0N/user.png" alt="" />
                    )}
                  </div>
                </label>
              </div>
              <button
                onClick={logOut}
                className=" btn btn-sm  ml-4 text-xs md:btn-md md:text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/add_jobs' className="btn btn-sm bg-[#918a8a] text-blue-950 border-none  text-xs md:btn-md md:text-sm">
                Add job
              </Link>
              <div className="divider divider-horizontal "></div>
              <Link
                to="/login"
                className="btn btn-sm   text-xs md:btn-md md:text-sm"
              >
                Login
              </Link>
              <Link
                to="/registration"
                className="btn btn-sm  ml-2 text-xs md:btn-md md:text-sm"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
        <div className="dropdown dropdown-bottom  dropdown-left">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
