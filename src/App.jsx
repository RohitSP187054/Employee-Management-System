import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // On initial load, get data from localStorage
    const { employees: empData, admin: adminData } = getLocalStorage();
    setEmployees(empData || []);
    setAdmin(adminData ? adminData[0] : null);

    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (admin && email === admin.email && password === admin.password) {
      const adminUser = { role: "admin", data: admin };
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else {
      const employee = employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        const employeeUser = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  const handleCreateTask = (newTaskData, assignTo) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.firstname === assignTo) {
        const newTasks = emp.tasks ? [...emp.tasks, newTaskData] : [newTaskData];
        // Also update task numbers
        const newTaskNumbers = {
          ...emp.taskNumbers,
          newTask: emp.taskNumbers.newTask + 1,
        };
        return { ...emp, tasks: newTasks, taskNumbers: newTaskNumbers };
      }
      return emp;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard
          changeUser={handleLogout}
          employees={employees}
          createTask={handleCreateTask}
        />
      ) : (
        <EmployeeDashboard
          changeUser={handleLogout}
          data={loggedInUserData}
        />
      )}
    </>
  );
}

export default App;