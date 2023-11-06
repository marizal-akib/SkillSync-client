const Login = () => {
  return (
    <div className="hero min-h-screen bg-[#e9ecf2]">
      <div className="card flex-shrink-0 w-4/5 max-w-4xl h-4/5 shadow-2xl bg-base-100">
        <div className="text-center mt-4 ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <button>Log In with Google</button>
        </div>
        <form className="card-body w-2/5 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
    </div>
  );
};

export default Login;
