import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import homeImage from "../../assets/home.png";
import Adidas from "../../assets/logos/Adidas.svg";
import Google from "../../assets/logos/Google.svg";
import Meta from "../../assets/logos/Meta.svg";
import Nike from "../../assets/logos/Nike.svg";
import Perspective from "../../assets/logos/Perspective.svg";

const Home = () => {
  return (
    <div className=" bg-gray-900 h-screen w-screen absolute top-0 left-0 text-white ">
      <nav className="flex flex-row justify-between items-center px-20 w-full h-10 mt-8">
        <div className="flex flex-row justify-center rounded-b-md pt-5 pb-5 pl-3  ">
          <Link
            className="text-xl text-white flex flex-row relative ml-4 "
            to={"/"}
          >
            <span className=" absolute left-[-30px] text-[#a6624a] top-1 scale-150 ">
              {<GiTakeMyMoney />}
            </span>
            <span className="text-xl">MyExpense</span>
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
          <Link to={"/login"} className=" cursor-pointer hover:text-[#a6624a]">
            Log In
          </Link>
          <Link
            to={"/register"}
            className=" cursor-pointer border-2 border-[#a6624a] hover:bg-[#a6624a] py-2 px-4"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      <div className=" flex flex-row w-full items-center justify-center mt-14 px-10">
        <div className="w-2/5 mx-auto ">
          <h1 className="text-7xl">
            Manage Your Expenses <span className="text-[#a6624a]">Easly</span>{" "}
            Today.
          </h1>
          <p className="text-gray-400 mt-4">
            all your expenses in one place. add, managa and follow the history
            of your purchases daily.
          </p>
          <div className="mt-8 space-x-4">
            <Link
              to={"/dashboard"}
              className="cursor-pointer border-2 border-[#a6624a] py-2 px-4 hover:bg-[#a6624a]"
            >
              Let&apos;s Begin!
            </Link>
            <Link
              to={"/login"}
              className=" underline-offset-2 underline hover:text-[#a6624a]"
            >
              or Log In
            </Link>
          </div>
        </div>
        <div className="w-2/5 mx-auto  ">
          <img
            src={homeImage}
            alt="home image"
            className="w-[500px] rounded-3xl  mx-auto"
          />
        </div>
      </div>
      <div className="text-white bg-gray-200 mt-12 h-[80px] flex flex-row justify-between items-center px-14">
        <img src={Adidas} alt="Adidas logo" className="w-[50px]   mx-auto" />
        <img src={Google} alt="Google logo" className="w-[80px]   mx-auto" />
        <img src={Meta} alt="Meta logo" className="w-[80px]   mx-auto" />
        <img
          src={Perspective}
          alt="Perspective logo"
          className="w-[100px]   mx-auto"
        />
        <img src={Nike} alt="Nike logo" className="w-[80px]   mx-auto" />
      </div>
    </div>
  );
};

export default Home;
