import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./context/PrivateRoutes.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Transactions from "./components/transactions/Transactions.jsx";
import Income from "./components/income/Income.jsx";
import Expense from "./components/expense/Expense.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "./context/globalContext.jsx";

function App() {
  return (
    <div className="h-screen bg-cover flex flex-row">
      <BrowserRouter>
        <GlobalProvider>
          <ToastContainer />
          <Navbar />
          <div className="w-full h-full bg-white bg-opacity-60 pt-3 pr-5 pb-2">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Use PrivateRoute for protected routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/income" element={<Income />} />
                <Route path="/expense" element={<Expense />} />
                <Route path="/transactions" element={<Transactions />} />
              </Route>
              {/* Redirect to Dashboard for any unmatched routes */}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
