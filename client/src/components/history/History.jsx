import { useGlobalContext } from "../../context/globalContext";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();
  const slicedHistory = history.slice(0, 4);

  return (
    <div className="mt-5 px-2">
      {slicedHistory.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className=" flex flex-row py-3 px-4  font-light  justify-between text-xl shadow-slate-900 my-2 rounded-md border-2 border-slate-400  "
          >
            <p
              style={{
                color: type === "expense" ? "red" : "green",
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === "expense" ? "red" : "green",
              }}
            >
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
