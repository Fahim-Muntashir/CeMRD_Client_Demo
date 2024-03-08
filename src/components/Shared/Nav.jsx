import { Dropdown, Navbar } from "flowbite-react";
import { RxAvatar } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Nav = () => {
  const { user, logout } = useAuth();

  const { uid, displayName, email } = user || {};

  const [normalUser, setNormalUser] = useState(true);

  const roleCheck = async () => {
    try {
      const response = await fetch(
        `https://cemrd-online.vercel.app/api/auth/users/role/${user.email}`
      );

      if (response.ok) {
        const data = await response.json();
        if (data.data !== user) {
          setNormalUser(false);
        }
      } else {
        console.error("Failed to fetch role data");
      }
    } catch (error) {
      console.error("Error fetching role data", error);
    }
  };

  if (email) {
    roleCheck();
  }

  const handleLogOut = async () => {
    await logout();
    toast
      .success("Logout Successfully!")
      .then(() => {
        localStorage.removeItem("cemrd-access-token");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      fluid
      rounded
      className="fixed xl:px-20 md:px-10 sm:px-2 px-4 w-full top-0 z-50 bg-white shadow-md"
    >
      <Navbar.Brand href="/">
        <img src="https://i.ibb.co/HpYr1kc/logo.png" className="w-40" alt="" />{" "}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Toaster></Toaster>
        {uid ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              // <Avatar
              //   alt="User settings"
              //   img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              //   rounded
              // />
              <RxAvatar className="text-4xl text-gray-800" />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{displayName}</span>
              <span className="block truncate text-sm font-medium">
                {email}
              </span>
            </Dropdown.Header>

            {normalUser || (
              <>
                <Dropdown.Item>
                  <Link to="/dashboard/">DashBoard</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link href="/dashboard/profile">Profile</Link>
                </Dropdown.Item>
              </>
            )}

            <Dropdown.Divider />
            <button
              className="bg-gray-100 font-bold w-full"
              onClick={handleLogOut}
            >
              <Dropdown.Item>
                Logout <IoLogOut className="text-2xl ms-3" />
              </Dropdown.Item>
            </button>
          </Dropdown>
        ) : (
          <>
            <Link
              className="mt-1 w-full bg-[white] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black hover:text-white transition-none hover:bg-blue-900 sm:mt-0 sm:w-auto sm:shrink-0"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="mt-1 w-full bg-[#1c1748] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-900 sm:mt-0 sm:w-auto sm:shrink-0"
              to="/signup"
            >
              Sign Up
            </Link>
          </>
        )}

        <Navbar.Toggle />
      </div>{" "}
      <Navbar.Collapse>
        <Navbar.Link href="/">
          <ActiveLink to="/" active>
            Home
          </ActiveLink>
        </Navbar.Link>
        <Navbar.Link href="/">
          <ActiveLink to="/about">About</ActiveLink>
        </Navbar.Link>
        <Navbar.Link href="/">
          <ActiveLink to="/events">Events</ActiveLink>{" "}
        </Navbar.Link>

        <Navbar.Link href="/">
          <ActiveLink to="/research">Research</ActiveLink>{" "}
        </Navbar.Link>

        <Navbar.Link href="/">
          <ActiveLink to="/publications">Publications</ActiveLink>{" "}
        </Navbar.Link>

        <Navbar.Link href="/">
          <ActiveLink to="/team">Team</ActiveLink>{" "}
        </Navbar.Link>
        <Navbar.Link href="/">
          <ActiveLink to="/blog">Blog</ActiveLink>{" "}
        </Navbar.Link>
        <Navbar.Link href="/">
          <ActiveLink to="/contact">Contact</ActiveLink>{" "}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
