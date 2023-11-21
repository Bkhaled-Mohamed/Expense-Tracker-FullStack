import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IncomeItem from "./ExpenseItem";

const Expense = () => {
  const { addExpense, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  const [incomesInputs, setIncomesInputs] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const handleInputs = (propertyName) => (e) => {
    setIncomesInputs({ ...incomesInputs, [propertyName]: e.target.value });
  };

  const { title, amount, category, description } = expenses;

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpense(incomesInputs);
  };

  return (
    <div className="w-full bg-slate-100 h-full rounded-t-md pl-5 pr-5">
      <div className="w-full h-[7%]  rounded-md flex flex-row justify-between px-4 my-2 items-center">
        <h1 className="text-black text-2xl font-semibold ">My Expenses</h1>
        <h2 className="w-[80%] text-center text-lg bg-slate-900 text-white py-2 px-4 rounded-md flex items-center justify-center">
          Total Expense:{" "}
          <span className="text-red-700 text-xl ml-4">${totalExpenses()}</span>
        </h2>
      </div>

      <div className="flex flex-row">
        <form onSubmit={handleSubmit} className=" flex flex-col w-2/4 p-2 mt-8">
          <label className="p-2 flex flex-col my-2 ">
            Enter Expense title:
            <input
              className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
              placeholder="cat food"
              type="text"
              name="title"
              autoComplete="new-password"
              value={title}
              onChange={handleInputs("title")}
            />
          </label>
          <label className="p-2 flex flex-col my-2">
            Enter Expense Amount:
            <input
              className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
              placeholder="$30.000"
              type="number"
              autoComplete="new-password"
              name="amount"
              value={amount}
              onChange={handleInputs("amount")}
            />
          </label>
          <div className="w-full ">
            <label className=" px-2 flex flex-col mt-2">Select a date</label>

            <DatePicker
              className="border-2 border-black rounded-md p-2 ml-2 py-2 px-4  cursor-pointer"
              id="date"
              autoComplete="new-password"
              placeholderText="pick a date"
              selected={incomesInputs.date}
              dateFormat="dd/MM/yyyy"
              onChange={(newDate) => {
                setIncomesInputs({ ...incomesInputs, date: newDate });
              }}
            />
          </div>
          <label className="p-2 flex flex-col my-2">
            Select a Catagory:
            <select
              required
              value={category}
              name="category"
              id="category"
              className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
              onChange={handleInputs("category")}
            >
              <option value="" disabled selected>
                Select an Option
              </option>
              <option value="food">food</option>
              <option value="transportation">transportation</option>
              <option value="entertainment">entertainment</option>
              <option value="bils">bils</option>
              <option value="cell phone">cell phone</option>
              <option value="clothing and personal upkeep">
                clothing and personal upkeep
              </option>
              <option value="funds">funds</option>
              <option value="others">Other</option>
            </select>
          </label>
          <label className="p-2 flex flex-col my-2">
            Enter a description:
            <textarea
              className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
              name="description"
              autoComplete="new-password"
              value={description}
              onChange={handleInputs("description")}
              placeholder="Add A description"
              id="description"
              cols="30"
              rows="4"
            ></textarea>
          </label>
          <button
            type="submit"
            className="py-2 px-4 bg-slate-950 text-white rounded-md"
          >
            Add Expense
          </button>
        </form>

        <div className="h-[80%] w-[50%] mt-8 p-4">
          <div className=" w-full h-[80vh] overflow-scroll">
            <h1 className=" font-semibold">Recent Expenses:</h1>
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <>
                  <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    indicatorColor="var(--color-green)"
                    deleteItem={deleteExpense}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
