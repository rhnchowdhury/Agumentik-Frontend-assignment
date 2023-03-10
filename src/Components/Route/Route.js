import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import Support from "../Pages/Supports/Support";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/support',
                element: <Support></Support>
            }
        ]
    }
]);
export default router;