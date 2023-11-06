import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/MnvY7mV/webmaster-day-connection-error-404-abstract-illustration-connection-error-715074-200.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          
          <Link to="/" className="btn btn-primary mt-80 lg:mt-96">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
