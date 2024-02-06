import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Logo from "../../../public/Images/logo.png";

import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";

const page = () => {
  const { signIn, googleLogin } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    event.preventDefault();
    const toastId = toast.loading("Loading");
    try {
      const user = await signIn(email, password);
      toast.dismiss(toastId);
      toast.success("Successfully Sign In!");
      if (user) {
        router.push("/", { scroll: false });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "user not Sign In");
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading");
    try {
      const user = await googleLogin();
      toast.dismiss(toastId);
      toast.success("Successfully Sign In!");
      if (user) {
        router.push("/", { scroll: false });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "user not Sign In");
    }
  };

  return (
    <div>
      {/* HELLO TESTn */}
      <section class="flex flex-col md:flex-row h-screen items-center">
        <div class="bg-indigo-600 hidden lg:block w-full md:w-2/2 xl:w-2/3 h-screen">
          <img
            src="https://images.unsplash.com/photo-1579165466991-467135ad3110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxyZXNlYXJjaHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div class="w-full h-100">
            <div>
              <Link href="/">
                <Image className="mx-auto" width={200} src={Logo}></Image>
              </Link>
              <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>
            </div>
            <form class="mt-6" onSubmit={handleLogin}>
              <div>
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div class="text-right mt-2">
                <a
                  href="#"
                  class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <input
                type="submit"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                value="Login"
              />
            </form>

            <hr class="my-6 border-gray-300 w-full" />

            <button
              onClick={handleGoogleLogin}
              type="button"
              class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  class="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use href="#a" overflow="visible" />
                  </clipPath>
                  <path
                    clip-path="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clip-path="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span class="ml-4">Log in with Google</span>
              </div>
            </button>

            <p class="mt-8">
              You dont have any Account!
              <Link
                href="/signup"
                class="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
