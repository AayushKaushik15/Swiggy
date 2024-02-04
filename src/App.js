import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import RestaurantsMenu from "./Components/RestaurantsMenu";
const Grocery = lazy(() => import("./Components/Grocery"))     //* lazy loading also known as on demand loading
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App () {
    return (
        <Provider store={appStore}>
            <div className="main-app">
                <Navbar/>
                <Outlet/>
            </div>
        </Provider>
    )
}

const rout = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>nice</h1>}><Grocery/></Suspense>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantsMenu/>
            }

        ]
    }
])

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(<RouterProvider router={rout}/>)