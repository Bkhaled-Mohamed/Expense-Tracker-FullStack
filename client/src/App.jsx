import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Transactions from "./components/transactions/Transactions.jsx";
import Income from "./components/income/Income.jsx";
import Expense from "./components/expense/Expense.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./pages/Login.jsx";
import register from "./pages/Register.jsx";

function App() {
  return (
    <div className=" h-screen bg-cover  flex flex-row">
      <BrowserRouter>
        <Navbar />
        <div className=" w-full h-full bg-white bg-opacity-60 pt-3  pr-5 pb-2  ">
          <Routes>
            <Route path="" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={register} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/income" Component={Income} />
            <Route path="/expense" Component={Expense} />
            <Route path="/transactions" Component={Transactions} />
            <Route path="/logout" />
            <Route path="*" Component={Dashboard} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
