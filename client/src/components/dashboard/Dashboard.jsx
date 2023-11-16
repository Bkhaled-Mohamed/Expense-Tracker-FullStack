import { FaWallet, FaHistory } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { SiQuicktime } from "react-icons/si";
import { MdOutlineAddBox, MdLogout } from "react-icons/md";
import { FiMinusSquare } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";

const Dashboard = () => {
  return (
    <div className=" w-full bg-slate-100 h-full rounded-t-md pl-5 pr-5 ">
      {/* ------- profil & title start -------- */}
      <div className="w-full h-[7%]  rounded-md flex flex-row justify-between px-4 my-2 items-center">
        <h1 className="text-black text-2xl font-semibold">My Dashboard</h1>
        <div className="flex flex-row items-center">
          <img
            className="w-10 h-10 rounded-full  border-white"
            src="src/assets/avatar.jpg"
            alt="avatar"
          />
          <div className=" ml-4 ">
            <h1 className=" text-lg text-black">Jhon Smith</h1>
          </div>
        </div>
      </div>
      {/* ------- profil & title end -------- */}

      {/* ------- walet & quick actions start -------- */}
      <div className="flex flex-row w-full h-[40%] overflow-hidden  justify-between text-black">
        <div className=" w-[58%] bg-white bg-opacity-60 rounded-lg py-4 px-2 flex flex-row">
          <div className="w-full relative">
            <div>
              <h1 className=" text-xl flex flex-row items-center ">
                <FaWallet /> <span className="ml-2"> My Wallet</span>
              </h1>
              <div className="w-2/4  h-full text-center">
                <h1 className="text-lg  mt-6 p-4  bg-gray-900 text-white  px-6 rounded-lg">
                  Avalable Balance :{" "}
                  <span className="text-blue-600 text-xl font-semibold">
                    {" "}
                    <br />
                    $45.000.000
                  </span>
                </h1>
                <div className="flex flex-col  text-lg mt-2 rounded-lg bg-slate-500">
                  <h1 className="p-2 ">
                    Total Income :{" "}
                    <span className="text-green-400 text-xl font-semibold">
                      $15.000
                    </span>
                  </h1>
                  <h1 className="p-2 ">
                    Total Expense :{" "}
                    <span className="text-red-700 text-xl font-semibold">
                      $5.000
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-[280px] absolute right-0 top-0 opacity-90">
              <IoWalletSharp />
            </div>
          </div>
        </div>
        <div className=" w-[40%] bg-white bg-opacity-60 rounded-lg py-4 px-2">
          <h1 className=" text-xl flex flex-row items-center ">
            <SiQuicktime /> <span className="ml-2"> Quick Actions</span>
          </h1>
          <div className="h-full mt-2 text-center">
            <div className="w-full flex flex-row justify-around items-center">
              <div className="flex flex-col justify-center items-center w-2/4 hover:bg-slate-400 cursor-pointer  py-2">
                <div className="text-[68px] opacity-80">
                  <MdOutlineAddBox />
                </div>
                <h1>Add Income</h1>
              </div>
              <div className="flex flex-col justify-center items-center w-2/4  hover:bg-slate-400  cursor-pointer py-2">
                <div className="text-[65px] opacity-80">
                  <FiMinusSquare />
                </div>
                <h1>Add Expense</h1>
              </div>
            </div>
            <div className="w-full  flex flex-row justify-around mt-2 items-center">
              <div className="flex flex-col justify-center items-center w-2/4  hover:bg-slate-400 cursor-pointer  py-2">
                <div className="text-[65px] opacity-80">
                  <GrTransaction />
                </div>
                <h1>Transactions</h1>
              </div>
              <div className="flex flex-col justify-center items-center w-2/4  hover:bg-slate-400 cursor-pointer py-2">
                <div className="text-[65px] opacity-80">
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
      <div className="flex flex-row w-full h-[48%] mt-5 justify-between">
        <div className=" w-[58%] bg-white bg-opacity-60 rounded-lg py-4 px-2 text-black">
          <h1 className=" text-xl flex flex-row items-center ">
            <ImStatsDots /> <span className="ml-2">statistics</span>
          </h1>
        </div>
        <div className=" w-[40%] bg-white bg-opacity-60 rounded-lg py-4 px-2 text-black">
          <h1 className=" text-xl flex flex-row items-center ">
            <FaHistory /> <span className="ml-2">Recent History</span>
          </h1>
        </div>
      </div>

      {/* ------- statistics & Transactions  end  -------- */}
    </div>
  );
};

export default Dashboard;
