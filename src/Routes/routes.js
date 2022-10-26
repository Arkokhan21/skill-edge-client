import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import CourseDetail from "../Components/Pages/CourseDetail/CourseDetail";
import Courses from "../Components/Pages/Courses/Courses";
import Error from "../Components/Pages/Error/Error";
import Faq from "../Components/Pages/Faq/Faq";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import PurchaseCourse from "../Components/Pages/PurchaseCourse/PurchaseCourse";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layout/Main";
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(' https://skill-edge-server-kappa.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(` https://skill-edge-server-kappa.vercel.app/courses/${params.id}`)
            },
            {
                path: '/purchaseCourse/:id',
                element: <Privateroute><PurchaseCourse></PurchaseCourse></Privateroute>,
                loader: ({ params }) => fetch(` https://skill-edge-server-kappa.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    },
]);