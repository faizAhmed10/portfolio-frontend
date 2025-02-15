import { createContext, useEffect, useState, useCallback } from "react";
import React from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let history = useNavigate();
  let [loading, setLoading] = useState(false);
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const apiUrl = import.meta.env.VITE_API_URL;

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (e.target.password.value !== e.target.confirmpassword.value) {
      alert("Passwords do not match, try again.");
    } else {
      let response = await fetch(`${apiUrl}api/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      let data = await response.json();
      console.log(data);
      let response2 = await fetch(`${apiUrl}api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      let data2 = await response2.json();
      if (response.status === 200) {
        setAuthTokens(data2);
        setUser(jwtDecode(data2.access));
        localStorage.setItem("authTokens", JSON.stringify(data2));
        history("/testimonialpost");
        setLoading(false)
      } else {
        alert("Something went wrong");
      }
    }
  };

  let loginUser = async (e) => {
    e.preventDefault();
    setLoading(true)
    let response = await fetch(`${apiUrl}api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      setLoading(false)
      history("/testimonialpost");
    } else {
      alert("Something went wrong");
    }
  };

  const logoutUser = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history("/login");
  }, [])

  

  useEffect(() => {
    let updateToken = async () => {
      let response = await fetch(`${apiUrl}api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "refresh": authTokens?.refresh,
        }),
      });
      let data = await response.json();
  
      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
      }
      else{
        logoutUser()
      }
  
      if (loading) {
        setLoading(false);
      }
    };
    if (loading) {
      updateToken();
    }
    let fourMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
      return () => clearInterval(interval);
    }, fourMinutes);
  }, [authTokens, loading, logoutUser]);

  let contextData = {
    user: user,
    authTokens: authTokens,
    loading: loading,
    apiUrl: apiUrl,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
