import { Link, useNavigate } from "react-router-dom";
import expenseImge from "../assets/expenseImage.jpg";
import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { registerUser } = useGlobalContext();
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputs = (propertyName) => (e) => {
    setRegisterData({ ...registerData, [propertyName]: e.target.value });
  };

  const handlesumbit = async (e) => {
    e.preventDefault();
    setRegisterData(registerData);
    try {
      await registerUser(registerData);
      navigate("/login");
    } catch (error) {
      console.log("failed");
    }
  };

  return (
    <div className=" bg-gray-900 h-screen w-screen absolute top-0 left-0 text-black  flex flex-row justify-center items-center md:p-auto">
      <div className="md:w-[700px] w-full h-full md:h-[500px] bg-slate-100 flex md:flex-row  flex-col items-center  overflow-hidden rounded-md shadow-sm shadow-slate-500">
        <div className="md:h-full w-full md:w-2/5 h-[200px]  relative overflow-hidden">
          <img
            src={expenseImge}
            alt="expense image"
            className=" object-cover w-full  scale-150 md:scale-[5] text-left"
          />
          <h1 className=" absolute bottom-3 left-3 text-2xl text-white">
            Welcome <br />
            to MyExpenses App.
          </h1>
        </div>
        <div className="md:w-full w-[90%]">
          <div className="mb-8  px-6 mt-6">
            <h1 className="text-4xl font-semibold">Register</h1>
            <p className=" text-slate-800">Please register to continue.</p>
          </div>
          <form
            className="flex flex-col w-full px-6 gap-y-2 "
            onSubmit={handlesumbit}
          >
            <label
              htmlFor="name"
              className="flex flex-col text-lg text-slate-800 "
            >
              {" "}
              write your name:
              <input
                autoComplete="new-password"
                type="text"
                name="name"
                onChange={handleInputs("name")}
                value={registerData.name}
                placeholder="exemple: Mike bakawski"
                className=" w-full py-2 px-4 bg-none rounded-md border-2 border-slate-800 text-black"
              />
            </label>
            <label
              htmlFor="email"
              className="flex flex-col text-lg text-slate-800 "
            >
              {" "}
              write your email:
              <input
                autoComplete="new-password"
                type="email"
                name="email"
                onChange={handleInputs("email")}
                value={registerData.email}
                placeholder="exemple: mike@gmail.com"
                className=" w-full py-2 px-4 bg-none rounded-md border-2 border-slate-800 text-black"
              />
            </label>
            <label
              htmlFor="email"
              className="flex flex-col text-lg text-slate-800 "
            >
              {" "}
              write your password:
              <input
                type="password"
                name="password"
                onChange={handleInputs("password")}
                value={registerData.password}
                placeholder="exemple: mike123"
                className="w-full py-2 px-4 bg-none rounded-md border-2 border-slate-800 text-black"
              />
            </label>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-none rounded-md border-2 bg-slate-800 text-white mt-6 hover:bg-slate-900"
            >
              REGISTER
            </button>
          </form>
          <p className="text-center mt-2">
            {" "}
            dont have an account?{" "}
            <Link
              to={"/login"}
              className="hover:text-slate-900 cursor-pointer text-lg font-semibold"
            >
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
