//library
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import { Home, Explore, Trainers, FAQ, ContactUs } from "../pages";

import MainLayout from "../layout/MainLayout/MainLayout";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'trainers',
                element: <Trainers />
            },
            {
                path: 'faq',
                element: <FAQ />
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            },
        ]
    }
])

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter