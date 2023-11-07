import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser } = useAuth();
  const handleReg = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");

  // let data = new FormData();
  // data.append('photo', photo)
  // console.log(data);

  //   fetch(
  //     "https://api.imgbb.com/1/upload?key=f5be8da7177edb3e9c0eebc96999f8bc",
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.rest();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("update"))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div
      className="hero  min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/JBmFTL9/medium-shot-smiley-business-woman-with-post-its.jpg)",
      }}
    >
      <div className="hero-overlay  bg-opacity-60"></div>
      <div className="card flex-shrink-0 my-5 w-4/5 max-w-3xl shadow-2xl bg-base-100">
        <div className="text-center mt-4 space-y-4">
          <h1 className="text-4xl px-2 font-bold">Sign Up now!</h1>
          <p>
            Already have an account?
            <Link className=" font-semibold" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleReg}
          className="card-body w-full md:w-3/5 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered"
         
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
