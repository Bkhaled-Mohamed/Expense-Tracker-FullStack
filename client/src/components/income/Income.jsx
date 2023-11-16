import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";

const Income = () => {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  // useEffect(() =>{
  //     getIncomes()
  // },[])

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };
  return (
    <div className="w-full bg-slate-100 h-full rounded-t-md pl-5 pr-5">
      <div className="w-full h-[7%]  rounded-md flex flex-row justify-between px-4 my-2 items-center">
        <h1 className="text-black text-2xl font-semibold ">My Incomes</h1>
        <h2 className="w-[80%] text-center text-lg bg-slate-900 text-white py-2 px-4 rounded-md flex items-center justify-center">
          Total Income:{" "}
          <span className="text-green-700 text-xl ml-4">${totalIncome()}</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className=" flex flex-col w-2/4 p-2 mt-12">
        <label className="p-2 flex flex-col my-2 ">
          Enter Income title:
          <input
            className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
            placeholder="Salary"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="p-2 flex flex-col my-2">
          Enter Income Amount:
          <input
            className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
            placeholder="$30.000"
            type="number"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="p-2 flex flex-col my-2">
          Select a Catagory:
          <select
            required
            value={name}
            name="category"
            id="category"
            className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investiments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="p-2 flex flex-col my-2">
          Enter a description:
          <textarea
            className="py-2 px-4 border-gray-700 border-2 rounded-md text-black"
            name="description"
            value={name}
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
          {" "}
          Add Income
        </button>
      </form>
    </div>
  );
};

export default Income;
