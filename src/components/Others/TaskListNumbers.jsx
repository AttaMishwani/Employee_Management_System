import React from "react";

export default function TaskListNumbers({ userData }) {
  return (
    <div className="flex justify-between gap-1 mt-3  w-[100%]">
      <div className="w-[25%] bg-red-500 px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold bg-red-500">
          {userData.taskStats.new}
        </h2>
        <h3 className="text-xl font-medium bg-red-500">New Task</h3>
      </div>
      <div className="w-[25%] bg-blue-600 px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold bg-blue-600">
          {userData.taskStats.completed}
        </h2>
        <h3 className="text-xl font-medium bg-blue-600">Completed Task</h3>
      </div>
      <div className="w-[25%] bg-pink-500  text-black px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold text-black bg-pink-500">
          {userData.taskStats.accepted}
        </h2>
        <h3 className="text-xl font-medium text-black bg-pink-500">
          Accepted Task
        </h3>
      </div>
      <div className="w-[25%] bg-green-500 px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold bg-green-500 ">
          {userData.taskStats.failed}
        </h2>
        <h3 className="text-xl font-medium bg-green-500 ">Failed Task</h3>
      </div>
    </div>
  );
}
