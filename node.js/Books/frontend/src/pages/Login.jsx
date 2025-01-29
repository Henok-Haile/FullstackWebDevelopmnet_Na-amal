import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = () => {
    if (!identifier || !password) {
      enqueueSnackbar("Please fill in all fields", { variant: "warning" });
      return;
    }

    axios
      .post("https://new-one-yoka.onrender.com/user/login", {
        identifier,
        password,
      })
      .then((response) => {
        const { username } = response.data;
        // console.log("Username:", username);

        // Store token and user details in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.username);

        // Notify user and navigate
        enqueueSnackbar("Login successful", { variant: "success" });
        navigate("/home", { state: { username } });
      })
      .catch((error) => {
        // Notify user of specific error messages
        const errorMessage = error.response?.data?.message || "Login failed";
        enqueueSnackbar(errorMessage, { variant: "error" });
        // enqueueSnackbar('Login failed', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="mx-4 my-4">Login</h1>
      <div className="p-4">
        <div className="my-4">
          <label className="mx-3 mr-4">Username</label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="px-4 py-2"
          />
        </div>

        <div className="my-4">
          <label className="mx-3 mr-4">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2"
          />
        </div>

        <button
          className="btn btn-primary mx-4 my-2 p-2"
          style={{ width: 300 }}
          onClick={handleLogin}
        >
          Login
        </button>
        <div>
          <p className="mx-4">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
