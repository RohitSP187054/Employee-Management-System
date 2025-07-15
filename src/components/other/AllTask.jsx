import React from "react";

const AllTask = ({ employees }) => {
  if (!employees || employees.length === 0) {
    return (
      <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60">
        <p className="text-gray-400">No employee data available.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60">
      <div className="bg-emerald-600 py-2 mb-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium text-center">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium text-center">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium text-center">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium text-center">Failed</h5>
      </div>
      <div className="h-[90%] overflow-auto">
        {employees.map((elem) => (
          <div
            key={elem.id}
            className="border-2 border-emerald-700 bg-emerald-500 py-2 mb-2 px-4 flex justify-between rounded"
          >
            <h2 className="w-1/5 text-lg font-medium ">{elem.firstname}</h2>
            <h3 className="w-1/5 text-lg font-medium text-blue-800 text-center">
              {elem.taskNumbers.newTask}
            </h3>
            <h5 className="w-1/5 text-lg font-medium text-yellow-200 text-center">
              {elem.taskNumbers.active}
            </h5>
            <h5 className="w-1/5 text-lg font-medium text-green-800 text-center">
              {elem.taskNumbers.completed}
            </h5>
            <h5 className="w-1/5 text-lg font-medium text-red-800 text-center">
              {elem.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;