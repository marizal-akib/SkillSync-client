import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser } = useAuth();
  const handleReg = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const picture = form.photo.value;

    if (password.length < 6) {
      return toast(
        "The password is less than 6 characters.It should be 6 characters or longer"
      );
    } else if (!/[A-Z]/.test(password)) {
      return toast("The password must contain at least one capital letter.");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return toast(
        "The password must contain at least one special character (!, @, #, $, %, ^, &, or *)."
      );
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Success!",
          text: "User created successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
        updateProfile(res.user, {
          displayName: name,
          photoURL: picture,
        })
          .then(() => console.log("update"))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        toast(error.message);
      });
    console.log(email, password, name, picture);
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
            <input type="text" name="photo" className="input input-bordered" />
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
      <ToastContainer />
    </div>
  );
};

export default Registration;
