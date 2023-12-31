import { FaWallet, FaHistory } from "react-icons/fa";

import { SiQuicktime } from "react-icons/si";
import { MdOutlineAddBox, MdLogout } from "react-icons/md";
import { FiMinusSquare } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect } from "react";
import Chart from "../chart/Chart";
import { Link, useNavigate } from "react-router-dom";
import History from "../history/History";
import { FaUserCircle } from "react-icons/fa";
import moneyImg from "../../assets/money.png";

const Dashboard = () => {
  const { totalIncome, totalExpenses, totalBalance, getExpenses, getIncomes } =
    useGlobalContext();
  const navigate = useNavigate();

  const { logout } = useGlobalContext();

  const handleLogout = async () => {
    // Call the logout function
    await logout();
    navigate("/home");
  };

  const userName = localStorage.getItem("user");
  const userData = JSON.parse(userName);

  useEffect(() => {
    getExpenses();
    getIncomes();
  }, []);
  return (
    <div className=" w-full h-full overflow-scroll  bg-slate-600  rounded-t-md pl-5 pr-5 flex justify-center ">
      <div className=" w-[1520px]">
        {/* ------- profil & title start -------- */}
        <div className="w-full h-[7%]  rounded-md flex flex-row justify-between lg:px-4 px-2 items-center">
          <h1 className="text-black text-base lg:text-2xl font-semibold">
            My Dashboard
          </h1>
          <div className="flex flex-row items-center ">
            <div className="lg:text-3xl text-2xl rounded-full text-white  border-white">
              <FaUserCircle />
            </div>
            <div className="ml-2 lg:ml-4 ">
              <h1 className="text-base  lg:text-lg text-white">
                {userData.name}
              </h1>
            </div>
          </div>
        </div>
        {/* ------- profil & title end -------- */}

        <div className="">
          {/* ------- walet & quick actions start -------- */}
          <div className="flex flex-col lg:flex-row w-full h-[40%] overflow-hidden  justify-between text-black">
            <div className=" w-full lg:w-[58%] bg-white bg-opacity-95 rounded-lg py-4 px-2 flex flex-row ">
              <div className="w-full relative">
                <div>
                  <h1 className=" text-xl flex flex-row items-center ">
                    <FaWallet /> <span className="ml-2"> My Wallet</span>
                  </h1>
                  <div className="w-full lg:w-2/4 px-8 h-full text-center">
                    <h1 className="text-lg  mt-6 p-4  bg-gray-900 text-white  px-6 rounded-lg">
                      Avalable Balance :{" "}
                      <span className="text-blue-600 text-xl font-semibold">
                        {" "}
                        <br />${totalBalance()}
                      </span>
                    </h1>
                    <div className="flex flex-col  text-lg mt-2 rounded-lg bg-slate-500">
                      <h1 className="p-2 ">
                        Total Income :{" "}
                        <span className="text-green-400 text-xl font-semibold">
                          ${totalIncome()}
                        </span>
                      </h1>
                      <h1 className="p-2 ">
                        Total Expense :{" "}
                        <span className="text-red-700 text-xl font-semibold">
                          ${totalExpenses()}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center lg:absolute right-3 lg:top-[-20px] ">
                  <img
                    src={moneyImg}
                    alt="money image"
                    className=" w-[250px] lg:w-64"
                  />
                </div>
              </div>
            </div>
            <div className=" w-full mt-4 lg:m-0 lg:w-[40%] bg-white bg-opacity-95 rounded-lg py-4 px-2">
              <h1 className=" text-xl flex flex-row items-center ">
                <SiQuicktime /> <span className="ml-2"> Quick Actions</span>
              </h1>
              <div className="h-full mt-2 text-center">
                <div className="w-full flex flex-row justify-around items-center">
                  <div
                    className="flex flex-col justify-center items-center w-2/4 hover:bg-slate-600  cursor-pointer hover:text-white py-2"
                    onClick={() => navigate("/income")}
                  >
                    <div className="text-[68px] ">
                      <MdOutlineAddBox />
                    </div>
                    <h1>Add Income</h1>
                  </div>
                  <div
                    className="flex flex-col justify-center items-center w-2/4  hover:bg-slate-600  cursor-pointer hover:text-white  py-2"
                    onClick={() => navigate("/expense")}
                  >
                    <div className="text-[65px] ">
                      <FiMinusSquare />
                    </div>
                    <h1>Add Expense</h1>
                  </div>
                </div>
                <div className="w-full  flex flex-row justify-around mt-2 items-center">
                  <div
                    className="flex flex-col justify-center items-center w-2/4  hover:bg-slate-600 cursor-pointer hover:text-white py-2"
                    onClick={() => navigate("/transactions")}
                  >
                    <div className="text-[65px]  ">
                      <GrTransaction className="" />
                    </div>
                    <h1>Transactions</h1>
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex flex-col justify-center items-center w-2/4  hover:bg-slate-600 cursor-pointer hover:text-white py-2"
                  >
                    <div className="text-[65px]">
                      <MdLogout />
                    </div>
                    <h1>Log Out</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------- walet & quick actions end -------- */}

          {/* ------- statistics & Transactions  start -------- */}
          <div className="flex flex-col lg:flex-row w-full h-full lg:h-[48%] mt-3 lg:mt-5 justify-between">
            <div className="min-w-[250px] lg:w-[58%] w-full bg-white bg-opacity-95 rounded-lg py-4  px-2 text-black">
              <h1 className=" text-xl flex flex-row items-center ">
                <ImStatsDots /> <span className="ml-2">statistics</span>
              </h1>

              <div className="h-[300px] md:h-[350px] lg:h-[90%]  sm:w-full flex justify-center overflow-cut items-center">
                <div className="   md:w-10/12 scale-100 flex justify-center items-center ">
                  <Chart className=" " />
                </div>
              </div>
            </div>

            <div className=" w-full lg:w-[40%] mb-4 lg:mb-0 mt-4 lg:mt-0 bg-white bg-opacity-95 rounded-lg py-4 px-2 text-black relative">
              <h1 className=" text-xl flex flex-row items-center ">
                <FaHistory /> <span className="ml-2">Recent History</span>
              </h1>
              <div>
                <Link
                  className=" absolute right-4 underline top-4 text-lg "
                  to={"/transactions"}
                >
                  view all
                </Link>
                <History />
              </div>
            </div>
          </div>
          {/* ------- statistics & Transactions  end  -------- */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
