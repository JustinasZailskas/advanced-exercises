import { Routes, Route } from "react-router";
import NavigationComponent from "../components/NavigationComponent";
import Home from "../pages/Home";
import FirstTask from "../pages/FirstTask";
import SecondTask from "../pages/SecondTask";
import ThirdTask from "../pages/ThirdTask";
import LoginForm from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";

const TaskRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="first-task" element={<FirstTask />} />
      <Route path="second-task" element={<SecondTask />} />
      <Route path="third-task" element={<ThirdTask />} />
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <AuthProvider>
      <NavigationComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route
          path="dashboard/*"
          element={
            <PrivateRoute>
              <TaskRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
