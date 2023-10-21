import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Forms/AddProduct";
import MyCart from "../Pages/MyCart";
import SignIn from "../Users/SignIn";
import SignUp from "../Users/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import BrandDetails from "../Brand/BrandDetails";
import UpdateProduct from "../Forms/UpdateProduct";
import ProductDetails from "../Brand/ProductDetails";
import Users from "../Users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5001/product')
            },
            {
                path: '/addProduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },

            {

                path: '/myCart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,

            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/users',
                element: <PrivateRoutes><Users></Users></PrivateRoutes>,
                loader: () => fetch('http://localhost:5001/user')
            },
            {
                path: '/brandDetails/:brandName',
                element: <BrandDetails></BrandDetails>,
                loader: ({ params }) => fetch(`http://localhost:5001/product/${params.brandName}`),

            },


            {
                path: '/updateProduct',
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                // loader: ({ params }) => fetch(`http://localhost:5001/getCart/${params.id}`)

            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5001/productById/${params.id}`)
            },


        ]
    },
]);

export default router;