import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // Ensure tasks exist and is an array before mapping
  const tasks = data && data.tasks ? data.tasks : [];

  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-stretch justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {tasks.map((elem, idx) => {
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        return null; // Return null if no condition is met
      })}
    </div>
  );
};

export default TaskList;