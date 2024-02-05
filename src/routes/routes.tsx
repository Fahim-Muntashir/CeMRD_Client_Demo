import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import React from "react";
import App from "../App";
import AddBlog from "../pages/Admin/AddBlog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: "addblog",
                element: <AddBlog />,
            },
        ],
    },

])

export default router;