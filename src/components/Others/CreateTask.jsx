import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { assignTask } from "../../ReduxStore/UserSlice";
import { v4 as uuidv4 } from "uuid";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [employees, setEmployees] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const submitHandler = (e) => {
    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      return alert("Fill in all the fields");
    }
    e.preventDefault();

    const newTask = {
      id: uuidv4(), // Generate a unique ID for each task
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      assignTo,
      category: category,
      active: false,
      completed: false,
      newTask: true,
      failed: false,
    };

    dispatch(assignTask({ employeeName: assignTo, task: newTask }));

    const updatedEmployees = employees.map((employee) => {
      if (employee.name === assignTo) {
        const updatedEmployee = {
          ...employee,
          tasks: [newTask, ...(employee.tasks || [])],
          taskStats: {
            ...employee.taskStats,
            new: (employee.taskStats?.new || 0) + 1,
          },
        };
        console.log(updatedEmployee); // Log the updated employee
        return updatedEmployee;
      }
      return employee;
    });

    // Update React state immediately
    setEmployees(updatedEmployees);

    // Sync with localStorage after updating state
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Clear the form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="flex justify-center items-center m-3 bg-zinc-900">
      <form
        onSubmit={submitHandler}
        className="flex justify-between w-[80%] gap-5 bg-zinc-900 mb-5 p-5 rounded-xl"
      >
        <div className="w-[50%] bg-zinc-900">
          <div className="input-container flex flex-col bg-zinc-900">
            <label htmlFor="taskTitle" className="text-white bg-zinc-900">
              Task title
            </label>
            <input
              id="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              className="text-white bg-transparent w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
              placeholder="Your Task title here"
            />
          </div>

          <div className="input-container flex flex-col bg-zinc-900">
            <label htmlFor="taskDate" className="text-white bg-zinc-900">
              Date
            </label>
            <input
              id="taskDate"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="text-white bg-zinc-900 w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
            />
          </div>

          <div className="input-container flex flex-col bg-zinc-900">
            <label htmlFor="assignTo" className="text-white bg-zinc-900">
              Assign to:
            </label>
            <select
              id="assignTo"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-white bg-zinc-900 w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
            >
              <option className="text-white" value="" disabled>
                Select Employee
              </option>
              {employees.map((employee) => (
                <option
                  className="text-white"
                  key={employee.id}
                  value={employee.name}
                >
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-container flex flex-col bg-zinc-900">
            <label htmlFor="category" className="text-white bg-zinc-900">
              Category
            </label>

            <select
              name="category"
              id="category"
              value={category}
              className="text-white bg-transparent w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled className="text-white">
                Select Category
              </option>
              <option value="web development" className="text-white">
                Web Development
              </option>
              <option value="graphic designing" className="text-white">
                Graphic Designing
              </option>
              <option value="SEO" className="text-white">
                SEO
              </option>
            </select>
          </div>

          <button className="text-black px-4 py-1 mt-3 bg-emerald-300 w-[fit-content] mx-auto rounded-md font-semibold">
            Create Task
          </button>
        </div>

        <div className="input-container w-[50%] bg-zinc-900">
          <label htmlFor="taskDescription" className="text-white bg-zinc-900">
            Description
          </label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-white bg-transparent w-full outline-none border-2 h-48 my-2 p-2 rounded-md border-emerald-300"
            placeholder="Your Task Description Here"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
