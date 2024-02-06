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
                path: 'managemresearch'
            }
        ],
    }, {
        path: "signup",
        element: <SignUp></SignUp>
    }

])

export default router;