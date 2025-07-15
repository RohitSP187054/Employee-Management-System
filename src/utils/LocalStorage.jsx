const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: { active: 1, completed: 1, newTask: 1, failed: 1 },
    tasks: [
      {
        id: "task-1",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Prepare the monthly sales report",
        date: "2024-12-01",
        category: "Reporting",
      },
      {
        id: "task-2",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Participate in the weekly team meeting",
        date: "2024-11-20",
        category: "Meetings",
      },
      {
        id: "task-3",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review the latest codebase changes",
        date: "2024-11-15",
        category: "Development",
      },
      {
        id: "task-4",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Production Bug",
        description: "A critical bug reported in production.",
        date: "2024-11-18",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: { active: 2, completed: 0, newTask: 1, failed: 0 },
    tasks: [
      {
        id: "task-5",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client Call",
        description: "Schedule and conduct a client feedback session",
        date: "2024-12-02",
        category: "Communication",
      },
      {
        id: "task-6",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update Documentation",
        description: "Update the technical documentation for the project",
        date: "2024-12-03",
        category: "Documentation",
      },
      {
        id: "task-7",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "New Feature Brainstorm",
        description: "Session for the next big feature.",
        date: "2024-12-05",
        category: "Strategy",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  // Only set data if it doesn't already exist
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));

  return { employees: employeesData, admin: adminData };
};