import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const router = useRouter();
  const axiosSecure = axios.create({
    baseURL: "https://cemrd-demo-two.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          router.push("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, axiosSecure]);
  return [axiosSecure];
};

export default useAxiosSecure;
