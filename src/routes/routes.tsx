import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import React from "react";
import App from "../App";
import AddBlog from "../pages/Admin/AddBlog";
import AddNews from "../pages/Admin/AddNews";

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
            }
        ],
    },

])

export default router;