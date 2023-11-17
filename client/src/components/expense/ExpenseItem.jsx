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
  console.log("type", type);

  return (
    <div className="w-full ">
      <div className="icon"></div>
      <div className="my-2 bg-slate-900 text-white w-full rounded-md p-2">
        <h1 className="font-bold">{title}</h1>
        <div className="">
          <div className="flex  flex-row gap-2">
            <p className="text-green-600">${amount}</p>
            <p>{date}</p>
            <p>{description}</p>
          </div>
          <div className="btn-con">
            <button
              className=" px-2 py-1  rounded-md bg-red-500 text-black"
              onClick={() => deleteItem(id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
