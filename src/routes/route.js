import { createBrowserRouter, Outlet } from "react-router-dom";
import PageNotFound from "../pages/NotFound";
import Home from "../pages/home";
import Collection from "../pages/collection";
import Login from "../pages/login";
import Trending from "../pages/trending";
import Header from "../components/header";
import Footer from "../components/footer";
import MobileNav from "../components/mobileNav";




export const AppLayout=()=>{
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <MobileNav></MobileNav>
        </>
    )
}




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,  // Use the layout here
        children: [
            { path: '/', element: <Home /> },
            { path: '/trending now', element: <Trending /> },
            { path: '/:city/:collection/:id', element: <Collection /> },
            { path: '/login', element: <Login /> },
            { path: '*', element: <PageNotFound /> }
        ]
    }
])



