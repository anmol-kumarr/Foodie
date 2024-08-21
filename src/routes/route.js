import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/NotFound";
import Home from "../pages/home";
import Collection from "../pages/collection";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/:city/:collection/:id',
        element:<Collection></Collection>
    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
    }
])
export default routes;