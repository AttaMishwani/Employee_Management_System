import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../ReduxStore/UserSlice";

const AddNewUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("employee"); // Default role is employee
  const [password, setPassword] = useState("");

  const { admin, employees } = useSelector((store) => store.users);

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const newUser = {
      id: role === "employee" ? `E${Date.now()}` : `A${Date.now()}`,
      name: name,
      email: email,
      password: password,
      userRole: role,
      ...(role === "employee"
        ? {
            taskStats: {
              accepted: 0,
              new: 0,
              completed: 0,
              failed: 0,
            },
            tasks: [],
          }
        : {}),
    };

    dispatch(addUser(newUser));

    // Clear input fields after submission
    setName("");
    setEmail("");
    setRole("employee");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex justify-center flex-col items-center py-5 bg-black"
    >
      <div className="mb-4 w-[40%]  items-center gap-5">
        <label
          htmlFor="name"
          className="block mb-3 font-medium  text-2xl text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name} // Bind the value to state
          onChange={(e) => setName(e.target.value)}
          className="text-white bg-transparent w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
        />
      </div>

      <div className="mb-4 w-[40%] items-center gap-5">
        <label
          htmlFor="email"
          className="block mb-3 text-2xl font-medium text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} // Bind the value to state
          onChange={(e) => setEmail(e.target.value)}
          className="text-white bg-transparent w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
        />
      </div>

      <div className="mb-4 w-[40%] items-center gap-5">
        <label
          htmlFor="role"
          className="block mb-3 text-2xl font-medium text-white"
        >
          Role
        </label>
        <select
          id="role"
          name="role"
          value={role} // Bind the value to state
          onChange={(e) => setRole(e.target.value)}
          className="text-white bg-transparent w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="mb-4 w-[40%] items-center gap-5">
        <label
          htmlFor="password"
          className="block text-2xl mb-3 font-medium text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Bind the value to state
          onChange={(e) => setPassword(e.target.value)}
          className="text-white bg-transparent w-full outline-none border-2 my-2 p-2 rounded-md border-emerald-300"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-sm font-medium text-lg px-5 py-2"
      >
        Add User
      </button>
    </form>
  );
};

export default AddNewUserForm;
