import React, { useState } from "react";
import { MdNaturePeople } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { LiaResearchgate } from "react-icons/lia";
import { MdOutlinePendingActions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiArchiveResearch } from "react-icons/gi";
import useAuth from "../../hooks/useAuth";
import { AiOutlineProfile } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
const AdminLayout = () => {

    const { user, logout } = useAuth();
    const [role, setRole] = useState('')
    const roleCheck = async () => {
        try {
            const response = await fetch(
                `https://cemrd-online.vercel.app/api/auth/users/role/${user.email}`
            );

            if (response.ok) {
                const data = await response.json();
                setRole(data.data)
            } else {
                console.error("Failed to fetch role data");
            }
        } catch (error) {
            console.error("Error fetching role data", error);
        }
    }

    if (user?.email) {
        roleCheck()
    }

    return (
        <div className="min-h-screen flex bg-white-900">
            <Toaster></Toaster>
            <div className="sidebar min-h-screen w-[140px] md:w-[64px] overflow-hidden border-r md:hover:w-80 lg:w-64 lg:hover:w-64 hover:bg-white hover:shadow-lg">
                <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                    <div>


                        <div className="w-max p-2.5">

                            <a href="/">


                                <img src="https://i.ibb.co/HpYr1kc/logo.png" className="w-40" alt="" />
                            </a>
                        </div>


                        {/* Admin Link */}
                        {
                            role === 'admin' && (
                                <ul className="mt-6 space-y-2 tracking-wide">
                                    <li className="min-w-max">
                                        <a href="#" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                            <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                            </svg>
                                            <span className="-mr-1 font-medium">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/addblog" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">


                                            <FaBlogger className="group-hover:text-cyan-300" />

                                            <span className="group-hover:text-gray-700">Add Blog</span>
                                        </Link>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/addresearch" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">


                                            <GiArchiveResearch />

                                            <span className="group-hover:text-gray-700">Add Research</span>
                                        </Link>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/addnews" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                                <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                            </svg>
                                            <span className="group-hover:text-gray-700">Add News</span>
                                        </Link>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/addadviser" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">

                                            <MdNaturePeople className="group-hover:text-cyan-300" />

                                            <span className="group-hover:text-gray-700">Add Adviser</span>
                                        </Link>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/addevent" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                            <RiCalendarEventFill className="group-hover:text-cyan-300" />
                                            <span className="group-hover:text-gray-700">Add Event</span>
                                        </Link>
                                    </li>
                                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                    <li className="min-w-max">
                                        <Link to="/dashboard/manageblogs" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">

                                            <FaBlogger className="group-hover:text-cyan-300" />
                                            <span className="group-hover:text-gray-700">Manage Blogs</span>
                                        </Link>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/manageusers" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                            <FaUsersCog
                                                className="group-hover:text-cyan-300" />
                                            <span className="group-hover:text-gray-700">Manage Users</span>
                                        </Link>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/manageresearch" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                            <LiaResearchgate className="group-hover:text-cyan-300" />
                                            <span className="group-hover:text-gray-700">Manage Research</span>
                                        </Link>
                                    </li>
                                    <li className="min-w-max">
                                        <Link to="/dashboard/managemresearch" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                            <MdOutlinePendingActions className="group-hover:text-cyan-300" />
                                            <span className="group-hover:text-gray-700">Pending MResearch</span>
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }

                        {/* Faqulty Link */}

                        {role === 'faculty' && (
                            <ul className="mt-6 space-y-2 tracking-wide">
                                <li className="min-w-max">
                                    <a href="#" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span className="-mr-1 font-medium">Dashboard</span>
                                    </a>
                                </li>



                                <li className="min-w-max">
                                    <Link to="/dashboard/profile" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                        <CgProfile className="group-hover:text-cyan-300" />
                                        <span className="group-hover:text-gray-700">Update Profile</span>
                                    </Link>
                                </li>
                                <li className="min-w-max">
                                    <Link to="/dashboard/addblog" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">

                                        <FaBlogger className="group-hover:text-cyan-300" />
                                        <span className="group-hover:text-gray-700">Add Blog</span>
                                    </Link>
                                </li>
                                <li className="min-w-max">
                                    <Link to="/dashboard/addmresearch" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                        <LiaResearchgate className="group-hover:text-cyan-300" />
                                        <span className="group-hover:text-gray-700">Add Research</span>
                                    </Link>
                                </li>
                                <li className="min-w-max">
                                    <Link to="/dashboard/*" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                        <AiOutlineProfile className="group-hover:text-cyan-300" />
                                        <span className="group-hover:text-gray-700">Manage Research</span>
                                    </Link>
                                </li>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            </ul>
                        )}
                    </div>




                    <div className="w-max -mb-3">
                        <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                            <span className="group-hover:text-gray-700">Settings</span>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default AdminLayout;