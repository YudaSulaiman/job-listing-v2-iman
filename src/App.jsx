/* eslint-disable react/no-unescaped-entities */
import JobList from "./pages/JobPages";
import JobHeader from "./pages/JobHeader";
import JobDescription from "./pages/JobDescription";
import JobLandingPages from "./pages/JobLandingPages";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const isLogin = localStorage.getItem("isLogin");
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    if (isLogin) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  
    const intervalId = setInterval(() => {
      const newIsLogin = localStorage.getItem("isLogin");
  
      if (newIsLogin) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [isLogin]);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <JobLandingPages/>,
    },
    {
      path: "/job-list",
      element: (
        <PrivateRoute isAllowed={isAllowed}>
          <JobHeader />
        </PrivateRoute>
      ),
      children: [
        {
          path: "",
          element: (
            <PrivateRoute isAllowed={isAllowed}>
              <JobList />
            </PrivateRoute>
          ),
        },
        {
          path: ":jobId",
          element: (
            <PrivateRoute isAllowed={isAllowed}>
              <JobDescription />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App