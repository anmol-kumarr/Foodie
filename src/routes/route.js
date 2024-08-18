import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/NotFound";
import Home from "../pages/home";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
    }
])
export default routes;