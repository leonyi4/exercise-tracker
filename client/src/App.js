import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ActivityDetail from "./components/Activity/ActivityDetail";
import EditActivity from "./components/Activity/EditActivity";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ActivityLayout from "./pages/UI/ActivityLayout";
import Error from "./pages/UI/Error";
import Layout from "./pages/UI/Layout";
import View, { loader as activityLoader } from "./pages/View/View";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "view",
        element: <ActivityLayout />,
        children: [
          { path: "", element: <View />, loader: activityLoader },
          { path: ":id", element: <ActivityDetail /> },
          { path: ":id/edit", element: <EditActivity /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-white   dark:bg-black dark:text-white text-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
