import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser } = useAuth();
  const handleReg = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const picture = form.photoURL.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.rest();
        updateProfile(result.user, {
          displayName: name,
          photoURL: picture,
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
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="photoURL"
              name="photoURL"
              placeholder="photoURL"
              className="input input-bordered"
              required
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
