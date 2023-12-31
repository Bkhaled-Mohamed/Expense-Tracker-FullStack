import { Link, useNavigate } from "react-router-dom";
import expenseImge from "../assets/expenseImage.jpg";
import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";
const Login = () => {
  const { loginUser } = useGlobalContext();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (propertyName) => (e) => {
    setLoginData({ ...loginData, [propertyName]: e.target.value });
  };

  const handlesumbit = async (e) => {
    e.preventDefault();
    setLoginData(loginData);
    try {
      await loginUser(loginData);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-slate-900 h-screen w-screen absolute top-0 left-0 text-black  flex flex-row justify-center items-center  md:p-auto">
      <div className="md:w-[700px] w-full h-full  md:h-[500px] bg-slate-100 flex md:flex-row flex-col items-center  overflow-hidden rounded-md shadow-sm shadow-slate-500">
        <div className="md:h-full w-full md:w-2/5 h-[200px]  relative overflow-hidden">
          <img
            src={expenseImge}
            alt="expense image"
            className=" object-cover w-full  scale-150 md:scale-[5] text-left"
          />
          <h1 className=" absolute bottom-3 left-3 text-2xl  md:text-2xl text-white">
            Welcome <br />
            to MyExpenses App.
          </h1>
        </div>
        <div className="md:w-full w-[90%]">
          <div className="mb-16  px-6 mt-6">
            <h1 className="text-4xl font-semibold">Login</h1>
            <p className=" text-slate-800">Please Log in to continue.</p>
          </div>
          <form
            onSubmit={handlesumbit}
            className="flex flex-col w-full px-6 gap-y-2 "
          >
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
                value={loginData.email}
                placeholder="exemple: jhon@email.com"
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
                value={loginData.password}
                placeholder="exemple: jhon123"
                className="w-full py-2 px-4 bg-none rounded-md border-2 border-slate-800 text-black"
              />
            </label>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-none rounded-md border-2 bg-slate-800 text-white mt-6 hover:bg-slate-900"
            >
              LOGIN
            </button>
          </form>
          <p className="text-center mt-2">
            {" "}
            dont have an account?{" "}
            <Link
              to={"/register"}
              className="hover:text-slate-900 cursor-pointer text-lg font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
