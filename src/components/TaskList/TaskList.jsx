import React from "react";

import CompletedTask from "./CompletedTask";

export default function TaskList({ userData }) {
  return (
    <div
      id="tasklist"
      className="w-full mt-10 py-5 h-[45%] gap-5 overflow-x-auto flex justify-start items-center flex-nowrap"
    >
      {userData.tasks.map((task, index) => {
        return <CompletedTask key={task.id} userData={userData} task={task} />;

        return null; // To avoid 'undefined' return value if no condition is met
      })}
    </div>
  );
}
