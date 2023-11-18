import moment from "moment";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { BsCalendarDate } from "react-icons/bs";

import { FaTrash } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  return (
    <div className="w-full ">
      <div className="icon"></div>
      <div className="my-2 bg-slate-900 text-white w-full rounded-md p-2">
        <h1 className="flex flex-row items-center text-2xl font-bold">
          <MdDriveFileRenameOutline /> {title}
        </h1>
        <div className="">
          <div className="flex  flex-row gap-2 justify-between">
            <p className="flex flex-row items-center text-2xl text-red-600">
              <GiMoneyStack /> ${amount}
            </p>
            <p className="flex flex-row items-center justify-center gap-x-2">
              <BsCalendarDate />
              {moment(date).format("DD/MM/YYYY")}
            </p>
          </div>
          <div>
            <p className="flex flex-row items-center justify-start gap-x-2 text-slate-500 py-2 px-4 rounded-md bg-slate-800 my-2">
              <RiMessage2Fill />
              {description}
            </p>
          </div>
          <div className=" flex  justify-start ">
            <button
              className=" px-2 py-1  rounded-md bg-red-500 text-black flex hover:bg-red-700 justify-end items-center flex-row gap-x-1"
              onClick={() => deleteItem(id)}
            >
              <FaTrash /> delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
