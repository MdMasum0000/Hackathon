import { Button } from "@/components/ui/button";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Host from "./Pages/Host";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Hosting from "./Pages/Hosting";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/host",
      element: <Host />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/hosting",
      element: <Hosting />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}
export default App;
