import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth} from 'state'

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // setLoading(true);
    setError("");

    if (
      (username === "Adrish" || username === "Deepu" || username === "Sandeep") &&
      password === "ddd"
    ) {
      login(username);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }

    // setLoading(false);
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.loginContainer}>
        <h1 style={styles.title}>Welcome to the App</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <h2>Login</h2>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {/* {loading ? "Logging in..." : "Login"} */}
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  loginContainer: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputWrapper: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default LoginPage;

