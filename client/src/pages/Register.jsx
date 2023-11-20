import { Link } from "react-router-dom";
import expenseImge from "../assets/expenseImage.jpg";

const register = () => {
  return (
    <div className=" bg-gray-100 h-screen w-screen absolute top-0 left-0 text-black  flex flex-row justify-center items-center ">
      <div className="w-2/4 h-[70%] bg-slate-100 flex flex-row   overflow-hidden rounded-md shadow-sm shadow-slate-500">
        <div className="h-full w-[550px] relative">
          <img
            src={expenseImge}
            alt="expense image"
            className=" object-fill w-full h-full text-left"
          />
          <h1 className=" absolute bottom-3 left-3 text-2xl text-white">
            Welcome <br />
            to MyExpenses App.
          </h1>
        </div>
        <div className="w-full">
          <div className="mb-8  px-6 mt-6">
            <h1 className="text-4xl font-semibold">Register</h1>
            <p className=" text-slate-800">Please register to continue.</p>
          </div>
          <form className="flex flex-col w-full px-6 gap-y-2 ">
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

export default register;
