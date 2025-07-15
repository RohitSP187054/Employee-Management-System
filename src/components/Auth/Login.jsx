import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    handleLogin(email, password);
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex  w-screen h-screen  items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className="border-2 border-emerald-600 text-xl py-3 px-5 bg-transparent outline-none placeholder:text-gray-400 rounded-full"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="border-2 border-emerald-600 mt-3 text-xl py-3 px-5 bg-transparent outline-none placeholder:text-gray-400 rounded-full"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className=" mt-5 border-none border-emerald-600 text-xl py-3 px-5 text-white  hover:bg-emerald-700 bg-emerald-600 outline-none placeholder:text-black rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
