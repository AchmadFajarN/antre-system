import { createBrowserRouter } from "react-router";
// Homepage
import App from "../App";
import Home from "../pages/Home";

// Auth
import Auth from "../pages/Auth";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

// Dashboard
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../components/Dashboard/DashboardHome";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
    ],
  },
]);

export default Router;
