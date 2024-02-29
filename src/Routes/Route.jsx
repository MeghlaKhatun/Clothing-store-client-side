import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Registration from "../Pages/Registration/Registration";
import LogIn from "../Pages/LogIn/LogIn";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/registration",
          element:<Registration></Registration>
        },
        {
          path:"/logIn",
          element:<LogIn></LogIn>
        }
      ]
    },
  ]);

  export default router;