import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  
  const {signInUser} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log("User logged in:", loggedInUser);
        const user = { email };
        navigate(location?.state ? location?.state : "/");
       
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero bg-base-200 w-full min-h-screen border">
        <div className="hero-content flex-col gap-16 lg:flex-row">
          <div className="w-full">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="your password"
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
                <button className="btn hover:bg-[#ff3811] bg-[#ff3811]">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mb-5">Or Sign In with</p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-circle text-xl">
                <FaFacebook className="text-green-500" />
              </button>
              <button className="btn btn-circle text-xl">
                {" "}
                <FaLinkedin className="text-green-500" />
              </button>
              <button className="btn btn-circle text-xl">
                {" "}
                <FcGoogle />
              </button>
            </div>
            <p className="text-center m-5">
              New to Car Doctors?
              <Link className="text-[#ff3811] font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
