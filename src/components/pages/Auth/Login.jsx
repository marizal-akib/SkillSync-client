import { FcGoogle } from "react-icons/fc";
import { Link,useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();

  const { emailSingIn, login } = useAuth()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email,password)
        .then(result =>{
          console.log(result.user);
          navigate(location?.state ? location.state : '/')
        })
      .catch(error => {
        console.error(error)
        toast("Email / Password doesn't match");
  
      })
      };
  return (
    <div className="hero  min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/D7bf18c/successful-business-man-working-laptop-while-drinking-coffee.jpg)'}}>
      <div className="hero-overlay  bg-opacity-60"></div>
      <div className="card flex-shrink-0 my-5 w-4/5 max-w-3xl shadow-2xl bg-base-100">
        <div className="text-center mt-4 space-y-4">
          <h1 className="text-4xl px-2 font-bold">Login now!</h1>
          <p>
            Don't have an account? 
            <Link className=" font-semibold" to="/registration"> Sign Up</Link>
          </p>
          <button onClick={emailSingIn} className="btn align-middle">
            <span className="text-base">
              <FcGoogle />
            </span>{" "}
            | Log In with Google
          </button>
        </div>
        <div className="divider mx-auto mt-10 w-3/4">OR</div>
        <form onSubmit={handleLogin} className="card-body w-full md:w-3/5 mx-auto">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
