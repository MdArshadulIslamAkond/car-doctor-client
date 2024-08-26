import { FaFacebook, FaLinkedin } from "react-icons/fa";
import img from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const {creatUser} = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password,name);
    creatUser(email, password)
    .then((result) => {
        const user = result.user;
        console.log(user);
    })
    .catch(error=>console.log(error))
  };
  return (
    <div>
      <div className="hero bg-base-200 w-full min-h-screen border">
        <div className="hero-content flex-col gap-16 lg:flex-row">
          <div className="w-full">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
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
                <button className="btn hover:bg-[#ff3811] bg-[#ff3811]">SignUp</button>
              </div>
            </form>
            <p className="text-center mb-5">Or Sign Up with</p>
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
            Already have an account?
              <Link className="text-[#ff3811] font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
