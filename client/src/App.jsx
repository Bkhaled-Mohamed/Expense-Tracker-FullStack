import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./context/PrivateRoutes.jsx";
import DirectRoute from "./context/DirectRoute.jsx";
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
import MobileNavbar from "./components/navbar/MobileNavbar.jsx";

function App() {
  return (
    <div className="h-screen w-screen bg-cover mx-auto ">
      <BrowserRouter>
        <GlobalProvider>
          <ToastContainer />
          <MobileNavbar />
          <div className="w-screen h-screen flex justify-center  bg-slate-100 md:pt-3 md:pr-3 md:pb-3">
            <Navbar />

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route element={<DirectRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
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
