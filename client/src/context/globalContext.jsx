import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000/api/";

const GlobalContext = React.createContext();

const getToken = () => {
  // getting the token from local storge
  const userDataSaved = localStorage.getItem("user");
  const userData = JSON.parse(userDataSaved);

  return userData ? userData.token : null;
};

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  //calculate incomes
  const addIncome = async (income) => {
    const token = getToken();
    try {
      if (isTokenExpired()) {
        logout();
        return;
      }
      const response = await axios.post(`${BASE_URL}add-income`, income, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Income added", {
        position: toast.POSITION.TOP_CENTER,
      });

      getIncomes();
    } catch (err) {
      toast.error(err.response.data.message || "server error", {
        position: toast.POSITION.TOP_CENTER,
      });
      setError(err.response.data.message);
    }
  };

  // Function to get incomes
  const getIncomes = async () => {
    const token = getToken();

    try {
      const response = await axios.get(`${BASE_URL}get-incomes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIncomes(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // Function to delete an income
  const deleteIncome = async (id) => {
    const token = getToken();

    try {
      if (isTokenExpired()) {
        logout();
        return;
      }
      const res = await axios.delete(`${BASE_URL}delete-income/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.warn("Income deleted", {
        position: toast.POSITION.TOP_CENTER,
      });

      getIncomes();
    } catch (err) {
      toast.success(err.response.data.message || "server error", {
        position: toast.POSITION.TOP_CENTER,
      });
      setError(err.response.data.message);
    }
  };

  // Function to calculate total income
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const addExpense = async (expense) => {
    const token = getToken();

    try {
      if (isTokenExpired()) {
        logout();
        return;
      }
      const response = await axios.post(`${BASE_URL}add-expense`, expense, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("expense added", {
        position: toast.POSITION.TOP_CENTER,
      });

      getExpenses();
    } catch (err) {
      toast.error(err.response?.data?.message || "Internal Server Error", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error("Error adding expense:", err);
      setError(err.response?.data?.message || "Internal Server Error");
    }
  };

  const getExpenses = async () => {
    const token = getToken();

    try {
      const response = await axios.get(`${BASE_URL}get-expenses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if response.data is defined
      setExpenses(response.data || []);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const deleteExpense = async (id) => {
    const token = getToken();

    try {
      if (isTokenExpired()) {
        logout();
        return;
      }
      const res = await axios.delete(`${BASE_URL}delete-expense/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.warn("expense deleted", {
        position: toast.POSITION.TOP_CENTER,
      });

      getExpenses();
    } catch (err) {
      toast.warn(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setError(err.response.data.message);
    }
  };

  const totalExpenses = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });

    return totalExpense;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history;
  };

  //register users
  const registerUser = async (userData) => {
    try {
      const res = await axios.post(`${BASE_URL}users/register`, userData);
      if (res.data) {
        // localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("User created! now log in", {
          position: toast.POSITION.TOP_CENTER,
        });

        return res;
      }
    } catch (error) {
      toast.warn(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      throw error;
    }
  };

  //login user

  const loginUser = async (userData) => {
    try {
      const res = await axios.post(`${BASE_URL}users/login`, userData);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("logged in, welcome", {
          position: toast.POSITION.TOP_CENTER,
        });

        return res;
      }
    } catch (error) {
      toast.warn(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  //logout user
  const logout = () => {
    // Cleaning user data from local storage
    localStorage.removeItem("user");
    toast.info("logged out, come back soon!", {
      position: toast.POSITION.TOP_CENTER,
    });
    handleNavigation("/home");
  };

  // Function to check if the JWT token is expired
  const isTokenExpired = () => {
    const userName = localStorage.getItem("user");

    if (!userName) {
      // No user data, consider the token as expired
      return true;
    }

    const userData = JSON.parse(userName);
    const userToken = userData.token;

    // decode the token
    const decodedToken = jwtDecode(userToken);

    // Check if the current time is past the token's expiration time
    return decodedToken.exp * 1000 < Date.now();
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
        registerUser,
        loginUser,
        logout,
        getToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
