import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import React from "react";
import App from "../App";
import AddBlog from "../pages/Admin/AddBlog";
import AddNews from "../pages/Admin/AddNews";
import AddEvent from "../pages/Admin/AddEvent";
import AddAdviser from "../pages/Admin/AddAdviser";
import AddResearch from "../pages/Admin/AddResearch";

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
            }
        ],
    },

])

export default router;