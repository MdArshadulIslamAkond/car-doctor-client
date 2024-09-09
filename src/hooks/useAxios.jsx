import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://cars-doctor-server-ivory.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  const { logOut } = useAuth(); 
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.message);
        if (error.response.status === 401 || error.response.status === 403) {
         
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.error(error);
             
            });
        }
      }
    );
  });
  return axiosSecure;
};

export default useAxios;
