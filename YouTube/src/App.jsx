import { useState } from "react"
import Body from "./components/Body"
import Header from "./components/Header"
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <Watchpage/>
    }
  ]
}])
function App() {
  const [sideBarActive,setSideBar] = useState(false);
  const toggle = () =>{
    setSideBar(!sideBarActive);
  }
  return (
    <>
      <Header toggleFunction = {toggle}/>
      {/* <Body sideBarActive = {sideBarActive}/> */}
      <RouterProvider router={appRouter}/>
    </> 
  )
}

export default App
