import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import React from "react";
import App from "../App";
import AddBlog from "../pages/Admin/Add/AddBlog";
import AddNews from "../pages/Admin/Add/AddNews";
import AddEvent from "../pages/Admin/Add/AddEvent";
import AddAdviser from "../pages/Admin/Add/AddAdviser";
import AddResearch from "../pages/Admin/Add/AddResearch";
import ManageUser from "../pages/Admin/Manage/ManageUser";
import ManageBlog from "../pages/Admin/Manage/ManageBlog";
import ManageResearch from "../pages/Admin/Manage/ManageResearch";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import MemberDetails from "../pages/Team/MemberDetails";
import AddMResearch from "../pages/Admin/Member/AddMResearch";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: '/dashboard',
        element: <AdminLayout />,
        children: [
            {
                path: "addblog",
                element: <AddBlog />,
            }, {
                path: 'addnews',
                element: <AddNews></AddNews>
            }, {
                path: 'addevent',
                element: <AddEvent></AddEvent>
            }, {
                path: 'addadviser',
                element: <AddAdviser></AddAdviser>
            }, {
                path: "addresearch",
                element: <AddResearch></AddResearch>
            }, {
                path: "manageusers",
                element: <ManageUser></ManageUser>
            }, {
                path: 'manageblogs',
                element: <ManageBlog></ManageBlog>
            }, {
                path: 'manageresearch',
                element: <ManageResearch></ManageResearch>
            },
            {
                path: 'addmresearch',
                element: <AddMResearch></AddMResearch>
            }, {
                path: 'updateprofile',
            }
        ],
    }, {
        path: "signup",
        element: <SignUp></SignUp>
    }, {
        path: "login",
        element: <Login></Login>
    }, {
        path: "about",
        element: <About></About>
    }, {
        path: 'team',
        element: <Team></Team>,
    }, {
        path: "team/memberdetails",
        element: <MemberDetails></MemberDetails>
    }

])

export default router;