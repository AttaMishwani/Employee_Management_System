import React from "react";
import Header from "../components/Others/Header";
import TaskListNumbers from "../components/Others/TaskListNumbers";
import TaskList from "../components/TaskList/TaskList";
// import Header from "../Others/Header";
// import TaskListNumbers from "../others/TaskListNumbers";
// import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ onLogout, employeeData }) => {
  const handleLogout = () => {
    onLogout();
  };
  return (
    <>
      <Header userData={employeeData} />
      {/* <TaskListNumbers userData={employeeData} /> */}
      <TaskList userData={employeeData} />
    </>
  );
};

export default EmployeeDashboard;
