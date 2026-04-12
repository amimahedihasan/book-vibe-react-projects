import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path:"/",
    Component:MainLayout,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      
      {
        path:"/books",
        element:<Books/>
      }
    ]
  }
])
