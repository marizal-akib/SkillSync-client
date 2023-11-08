import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/6mmpGL4/happy-man-with-laptop-computer-office.jpg)",
      }}
    >
      <div className="hero-overlay  bottom-0 h-full bg-gradient-to-r from-[#353535] to-[rgba(21,21,21,0)]"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-xl">
          Post a job for free and connect with independent talent today
          </p>
          <Link to='/add_jobs' className="btn border-none bg-orange-600 hover:bg-orange-400 rounded-md">Post Job</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
