import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";

const router = createBrowserRouter([{
    path:'/',
    element:<MainLayouts></MainLayouts>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
}])
export default router