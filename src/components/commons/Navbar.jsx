import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Add job</Link>
      </li>
      <li>
        <Link>My Bids</Link>
      </li>
      <li>
        <Link>Bid Requests</Link>
      </li>
      <li>
        <Link>My posted jobs</Link>
      </li>
      <li className="lg:hidden">
        <Link >Register/login</Link>
      </li>
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
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <Link to='/login' className="btn btn-sm   text-xs md:btn-md md:text-sm">Login</Link>
          <Link to='/registration' className="btn btn-sm  ml-2 text-xs md:btn-md md:text-sm">
            Sign up
          </Link>
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
