import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateEmp from "./components/CreateEmp";
import ViewAllEmployees from "./components/ViewAllEmployees";
import ViewSingle from "./components/ViewSingle";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "createemp",
          element: <CreateEmp />,
        },
        {
          path: "viewall",
          element: <ViewAllEmployees />,
        },
        {
          path: "viewsingle/:id",
          element: <ViewSingle />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
