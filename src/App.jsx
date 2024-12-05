import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import { loadUserFromStorage, login, logout } from "./ReduxStore/AuthSlice";

function App() {
  const [loading, setLoading] = useState(true);

  const { user, userData } = useSelector((store) => store.auth);
  const { admin, employees } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUserFromStorage());
    setLoading(false);
  }, [dispatch]);

  const handleLogin = (email, password) => {
    const currentAdmin = admin.find(
      (user) => user.email === email && user.password === password
    );

    if (currentAdmin) {
      dispatch(login({ role: "admin", data: currentAdmin }));
      navigate("/admin");
      return;
    }

    const currentEmployee = employees.find(
      (user) => user.email === email && user.password === password
    );

    if (currentEmployee) {
      dispatch(login({ role: "employee", data: currentEmployee }));
      navigate("/employee");
    } else {
      alert("Invalid credentials, user not found");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Loading screen to prevent race conditions
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app max-w-[1000px] mx-auto">
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            user === null ? (
              <Login handleLogin={handleLogin} />
            ) : (
              <Navigate
                to={user === "admin" ? "/admin" : "/employee"}
                replace
              />
            )
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            user === "admin" ? (
              <AdminDashboard
                adminData={userData}
                handleLogout={handleLogout}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Employee Dashboard */}
        <Route
          path="/employee"
          element={
            user === "employee" ? (
              <EmployeeDashboard
                employeeData={userData}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
