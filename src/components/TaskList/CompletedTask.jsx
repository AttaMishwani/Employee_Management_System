import React from "react";
import { ImCross } from "react-icons/im";

export default function CompletedTask({ task, userData }) {
  return (
    <div className="p-5 flex-shrink-0 w-[300px] bg-pink-400 rounded-3xl">
      <div className="flex justify-between bg-pink-400 items-center">
        <ImCross className="bg-pink-400 cursor-pointer" />

        <h2 className="bg-red-500 py-1 px-3 rounded-lg font-medium text-sm">
          {task.date || "No Date"}
        </h2>
      </div>
      <h2 className="mt-5 text-xl bg-pink-400 font-semibold">
        {task.title || "Untitled Task"}
      </h2>
      <p className="text-sm bg-pink-400">
        {task.description || "No Description"}
      </p>
    </div>
  );
}
