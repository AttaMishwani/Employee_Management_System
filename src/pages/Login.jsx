import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="border-2 rounded-md border-emerald-300 p-10">
        <form
          onSubmit={submitHandler}
          className="flex flex-col rounded-md items-center justify-center"
        >
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-transparent w-full text-white outline-none border-2 m-2 p-2 rounded-md border-emerald-300"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-transparent w-full text-white outline-none border-2 m-2 p-2 rounded-md border-emerald-300"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="px-4 py-1 mt-3 w-full bg-emerald-300 text-white rounded-md font-bold">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
