import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { BsCalendarDate } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { useGlobalContext } from "../../context/globalContext";
import moment from "moment";

const Transactions = () => {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div>
      <div className="mt-2 px-2 pt-2 h-[80vh] bg-slate-100 ">
        <h1 className="text-2xl pl-6 font-semibold">Transactions</h1>
        <div className="overflow-scroll flex flex-wrap gap-2 w-full mt-6  h-full">
          {history.map((item) => {
            const { _id, title, amount, type, date, category, description } =
              item;
            return (
              <div
                key={_id}
                className=" w-[90%]  h-fit py-2 px-4 ml-4  text-white justify-between text-xl bg-slate-950 my-2 rounded-md border-2 border-slate-900"
              >
                <div className="flex flex-row justify-between m-1">
                  <p
                    className="flex flex-row items-center text-2xl "
                    style={{
                      color: type === "expense" ? "red" : "green",
                    }}
                  >
                    <MdDriveFileRenameOutline />{" "}
                    <span className="ml-2">{title}</span>
                  </p>
                  <p
                    style={{
                      color: type === "expense" ? "red" : "green",
                    }}
                    className="flex flex-row items-center text-2xl"
                  >
                    <GiMoneyStack />
                    {type === "expense"
                      ? `-$${amount <= 0 ? 0 : amount}`
                      : `+$${amount <= 0 ? 0 : amount}`}
                  </p>
                </div>
                <div className="flex flex-row justify-between px-2">
                  <p className="flex flex-row items-center justify-center gap-x-2">
                    <BsCalendarDate /> {moment(date).format("DD/MM/YYYY")}
                  </p>
                  <p className="flex flex-row items-center justify-center gap-x-2">
                    <FaGlobe /> {category}
                  </p>
                </div>
                <p className="flex flex-row items-center justify-start gap-x-2 text-slate-500 py-2 px-4 rounded-md bg-slate-900 my-2">
                  <RiMessage2Fill /> {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
