import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
    const formLog = e.currentTarget;
    const form = new FormData(formLog);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signInUser(email, password)
    .then(result=>{
       const user = result;
       console.log('User logged in:', user);
    })
    .catch(error=>console.error(error))
  
    }
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
                <button className="btn hover:bg-[#ff3811] bg-[#ff3811]">Login</button>
              </div>
             
            </form>
            <p className="text-center mb-5">Or Sign In with</p>
            <div className="flex gap-4 justify-center">
            <button className="btn btn-circle text-xl"><FaFacebook className="text-green-500" /></button>
           <button className="btn btn-circle text-xl"> <FaLinkedin className="text-green-500" /></button>
           <button className="btn btn-circle text-xl"> <FcGoogle /></button>
            </div>
            <p className="text-center m-5">New to Car Doctors?<Link className="text-[#ff3811] font-bold" to='/signup' >Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
