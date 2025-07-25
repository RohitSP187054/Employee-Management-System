import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ changeUser, employees, createTask }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} username="Admin" />
      <CreateTask createTask={createTask} employees={employees} />
      <AllTask employees={employees} />
    </div>
  );
};

export default AdminDashboard;